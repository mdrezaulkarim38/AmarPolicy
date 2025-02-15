using System.ComponentModel.DataAnnotations;

namespace Server.Dtos.AuthDtos;

public class LoginDto
{
    [Required]
    public string? Email { get; set; }
    [Required]
    public string? Password { get; set; }
}