using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
//using System.Threading.Tasks;
using InvoiceAPI.Models.Task.Entity;
using InvoiceAPI.Http.Request.Task;
using InvoiceAPI.Models.Task.Entity.Repository;
using InvoiceAPI.Models.Task.Entity.UseCase;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InvoiceAPI.Http.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly TaskService _taskService;
        private readonly EFRepository _eFRepository;

        public TaskController(TaskService taskService, EFRepository repository) {
            this._taskService = taskService;
            this._eFRepository = repository;

        }

        [HttpPost]
        public ActionResult Create([FromForm]TaskRequest reques) {

            try { 
                this._taskService.Create(reques);

                return StatusCode((int)HttpStatusCode.OK);
            } catch(Exception ex) {
                return StatusCode((int)HttpStatusCode.BadRequest);
            }
        }

        [HttpGet]
        public ActionResult GetTasks() {
            return this.Ok(this._eFRepository.ListTask(55.00));
        }
    }
}