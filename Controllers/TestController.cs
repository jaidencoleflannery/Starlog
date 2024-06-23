using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoAPI.Controllers{
    [Route("api/[controller]")]
    [ApiController]

    class TestController : ControllerBase{
        private readonly TestContext _context;

        public TestController(TestContext context)
        {
            _context = context;
        }

        public async Task<ActionResult<IEnumerable<TodoItem>>> GetTodoItems()
        {
            return await _context.TodoItems.ToListAsync();
        }
    }

}