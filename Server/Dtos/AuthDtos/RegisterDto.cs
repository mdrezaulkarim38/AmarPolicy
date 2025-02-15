using System.ComponentModel.DataAnnotations;

namespace Server.Dtos.AuthDtos;

public class RegisterDto
{
    [Required]
    public string? Name { get; set; }
    [Required]
    [EmailAddress]
    public string? Email { get; set; }
    [Required]
    public string? Mobile { get; set; }
    [Required]
    [MinLength(6, ErrorMessage = "Password must be at least 6 characters long.")]
    public string? Password { get; set; }
    public int? RoleId { get; set; } 
}