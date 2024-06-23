using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models;

public class TestContext : DbContext
{
    public TestContext(DbContextOptions<TestContext> options) : base(options)
    {
    }

    public DbSet<TodoItem> TodoItems { get; set; } = null;
}