using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
//using System.Web.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using InvoiceAPI.Http.Request;
using InvoiceAPI.Models.Invoce.Entity;
using InvoiceAPI.Models.Invoce.Service;
using InvoiceAPI.Models.Invoce.UseCase;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace InvoiceAPI.Http.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
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

        [HttpPost]
        public ActionResult Invoce([FromForm]InvoceReques reques)
        {
            try {
                Invoce invoce = this._service.createInvoce(reques);
                this._service.generateWork(invoce);

                return File(
                    System.IO.File.ReadAllBytes(this._wordFile.GetReadPath()),
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                );
            } 
            
            catch (Exception e) {
                return StatusCode((int)HttpStatusCode.BadRequest);
            }
        }

        [HttpPost]
        public ActionResult Upload([FromForm]MultipartFormDataContent file)
        {
            MultipartFormDataContent uploadFile = file;
            return this.Ok();
        }
    }
}
