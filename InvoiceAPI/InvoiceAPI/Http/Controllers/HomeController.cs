using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using InvoiceAPI.Http.Request.Invoice;
using InvoiceAPI.Http.Request.Task;
using InvoiceAPI.Models.Invoce.Entity;
using InvoiceAPI.Models.Invoce.Service;
using InvoiceAPI.Models.Invoce.UseCase;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;

namespace InvoiceAPI.Http.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HomeController : Controller
    {


        private readonly ILogger<HomeController> _logger;
        private readonly InvoceService _service;
        private readonly WordFile _wordFile;
        private readonly GetAllSheets _getAllSheets;

        public HomeController(ILogger<HomeController> logger, InvoceService service, WordFile wordFile, GetAllSheets allsheets)
        {
            _logger = logger;
            this._service = service;
            this._wordFile = wordFile;
            this._getAllSheets = allsheets;
        }

        [HttpPost]
        public IEnumerable<string> Upload([FromForm]FileRequest reques)
        {
            var filePath = Path.GetTempFileName();//Получаем времений путь до файла
            Invoce invoice = null; //создаем екземпляр инвойса 

            using (var stream = new FileStream(filePath, FileMode.Create)) //открываем файл в потоке
            {
                ISheet sheet;///Экземпляр таблицы
                string sFileExtension = Path.GetExtension(reques.File.FileName).ToLower();
                List<string> name = new List<string>();

                reques.File.CopyTo(stream);
                stream.Position = 0;
                if (sFileExtension == ".xls")
                {
                    XSSFWorkbook hssfwb = new XSSFWorkbook(stream); //This will read 2007 Excel format  
                    name = this._getAllSheets.getSheets(hssfwb);
                    return name;
                }
                else
                {
                    XSSFWorkbook hssfwb = new XSSFWorkbook(stream); //This will read 2007 Excel format  
                    name = this._getAllSheets.getSheets(hssfwb);
                    //var json = new JavaScriptSerializer().Serialize(obj);
                    return name;

                }

            }
        }

        [HttpPost]
        public ActionResult Invoce([FromForm]InvoceReques reques)
        {
            try
            {
                Invoce invoce = this._service.createInvoce(reques);
                this._service.generateWork(invoce);
                return File(
                    System.IO.File.ReadAllBytes(this._wordFile.GetReadPath()),
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                );
            }
            catch (Exception e)
            {
                return StatusCode((int)HttpStatusCode.BadRequest);
            }
        }

    }
}
