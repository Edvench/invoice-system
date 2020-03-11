using InvoiceAPI.Http.Request.Task;
using InvoiceAPI.Models.Task.Entity.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Models.Task.Entity.UseCase
{
    public class TaskService
    {
        private readonly EFRepository _eFRepository;

        public TaskService(EFRepository repository)
        {
            this._eFRepository = repository;
        }

        public void Create(TaskRequest taskRequest)
        {
            Task task = Task.Create(
                Guid.NewGuid().ToString(),
                taskRequest.Money,
                taskRequest.Title,
                taskRequest.Description,
                taskRequest.DateOfTask
            );

            this._eFRepository.Add(task);
        }
    }
}
