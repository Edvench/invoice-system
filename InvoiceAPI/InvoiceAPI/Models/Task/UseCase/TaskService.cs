using InvoiceAPI.Http.Request.Task;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Models.Task.Entity.UseCase
{
    public class TaskService
    {
        private readonly Task _task;

        public TaskService(Task task) {
            this._task = task;
        }

        public void Create(TaskRequest taskRequest) {
           Task.Create(taskRequest.Money,taskRequest.Title,taskRequest.Description,taskRequest.Date_of_task);
        }
    }
}
