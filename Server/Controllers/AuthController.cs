using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Data;
using Server.Models;
using Server.Dtos.AuthDtos;
using Server.Services;

namespace Server.Controllers;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly JwtService _jwtService;

    public AuthController(AppDbContext context, JwtService jwtService)
    {
        _context = context;
        _jwtService = jwtService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody] RegisterDto dto)
    {
        if (await _context.users.AnyAsync(u => u.Email == dto.Email))
        {
            return BadRequest("Email already exists");
        }

        
        var customerRole = await _context.roles.FirstOrDefaultAsync(r => r.Name == "Customer");
        if (customerRole == null)
        {
            return StatusCode(500, "Role not found. Please seed the database.");
        }

        var user = new Users
        {
            Name = dto.Name,
            Email = dto.Email,
            Mobile = dto.Mobile,
            Password = dto.Password, 
            RoleId = customerRole.Id
        };

        _context.users.Add(user);
        await _context.SaveChangesAsync();

        return Ok("User registered successfully.");
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginDto dto)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);
        
        var user = await _context.users.FirstOrDefaultAsync(u => u.Email == dto.Email && u.Password == dto.Password);
        if (user == null)
        {
            return Unauthorized(new { message = "Invalid email or password" });
        }

        var token = _jwtService.GenerateToken(user);
        return Ok(new { token });
    }
}
