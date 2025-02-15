namespace Server.Models;

public class Users
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Mobile { get; set; }
    public string? Email { get; set; }
    public string? Password { get; set; }
    public Roles? Role { get; set; }
    public int RoleId { get; set; }
}