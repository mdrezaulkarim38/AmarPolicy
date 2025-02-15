using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
    public DbSet<Users> users { get; set; }
    public DbSet<Roles> roles { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Users>()
            .HasOne(u => u.Role)
            .WithMany()
            .HasForeignKey(u => u.RoleId)
            .OnDelete(DeleteBehavior.Restrict);
        
        modelBuilder.Entity<Roles>().HasData(
            new Roles { Id = 1, Name = "Admin", Status = true },
            new Roles { Id = 2, Name = "Customer", Status = true },
            new Roles { Id = 3, Name = "Vendor", Status = true }
        );

        modelBuilder.Entity<Users>().HasData(
            new Users
            {
                Id = 1,
                Name = "Admin",
                Email = "admin@test.com",
                Password = "admin@123",
                RoleId = 1
            }
        );
    }
}