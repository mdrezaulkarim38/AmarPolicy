using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Server.Models;

namespace Server.Services;

public class JwtService
{
    private readonly string _key;
    private readonly string _issuer;
    private readonly string _audience;
    private readonly int _expireMinutes;

    public JwtService(IConfiguration config)
    {
        _key = config["Jwt:Key"]!;
        _issuer = config["Jwt:Issuer"]!;
        _audience = config["Jwt:Audience"]!;
        var expireMinutes = config["Jwt:ExpireMinutes"];
        _expireMinutes = string.IsNullOrEmpty(expireMinutes) 
            ? 60 // Default to 60 minutes
            : int.Parse(expireMinutes);
    }

    public string GenerateToken(Users user)
    {
        var claims = new List<Claim>
        {
            new Claim(JwtRegisteredClaimNames.Email, user.Email!),
            new Claim(JwtRegisteredClaimNames.GivenName, user.Name!),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            new Claim(ClaimTypes.Role, user.RoleId.ToString()) // Include the role claim
        };
        
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_key));
        var creeds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        var token = new JwtSecurityToken(
            _issuer, _audience, claims,
            expires: DateTime.UtcNow.AddMinutes(_expireMinutes),
            signingCredentials: creeds
        );
        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}
