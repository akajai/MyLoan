using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using myloan.Models;

namespace myloan.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class PLoanController : ControllerBase
    {
        // GET: api/PLoan
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/PLoan/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/PLoan

        public class Body
        { 
        public string value { get; set; }
        }
        [HttpPost]
        public void Post([FromBody] PLoan loanData)
        {
            int a = 0;
            //return CreatedAtAction("GetEmployee", new { id = value }, value);
        }

        // PUT: api/PLoan/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
