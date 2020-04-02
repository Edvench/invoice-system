using System;
using System.Net;
using InvoiceAPI.Http.Request.Task;
using InvoiceAPI.Models.Task.Entity.Repository;
using InvoiceAPI.Models.Task.Entity.UseCase;
using Microsoft.AspNetCore.Mvc;
using InvoiceAPI.Http.Responce;


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
                int zero = 0;
                int result = (1 / zero);

                return StatusCode((int)HttpStatusCode.OK, new TaskCreateResponcecs((int)HttpStatusCode.OK,"Created"));
            } catch(Exception ex) {
                return StatusCode((int)HttpStatusCode.BadRequest, new TaskCreateResponcecs((int)HttpStatusCode.BadRequest, ex.Message));
            }
        }

        [HttpGet]
        public ActionResult GetTasks([FromQuery]TaskSearchRequest request, [FromQuery]TaskPaginationRequest paginator) {
            return this.Ok(this._eFRepository.ListTask(request, paginator));
        }
    }
}