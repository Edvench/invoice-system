using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InvoiceAPI.Http.Request;
using InvoiceAPI.Models.Invoce.Entity;
using InvoiceAPI.Models.Invoce.Service;
using InvoiceAPI.Models.Invoce.UseCase;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace InvoiceAPI.Http.Controllers
{
    [Route("api/[controller]")]
    public class HomeController : Controller
    {


        private readonly ILogger<HomeController> _logger;
        private readonly InvoceService _service;
        private readonly WordFile _wordFile;

        public HomeController(ILogger<HomeController> logger, InvoceService service, WordFile wordFile)
        {
            _logger = logger;
            this._service = service;
            this._wordFile = wordFile;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Invoce(InvoceReques reques)
        {
            if (reques.File != null && reques.File.Length > 0 && reques.Money > 0)
            {
                Invoce invoce = this._service.createInvoce(reques);
                this._service.generateWork(invoce);

                return PhysicalFile(this._wordFile.GetReadPath(), WordFile.FILE_TYPE_RESPONSE);///Отдаем файл на скачивание
            }
            return Redirect("/home/index");
        }
        //GET: api/<controller>
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        //[HttpPost]
        //public void Post([FromBody]string value)
        //{
        //}

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
