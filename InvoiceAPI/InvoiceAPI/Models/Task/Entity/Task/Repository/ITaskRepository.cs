using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Models.Task.Entity.Repository
{
    interface ITaskRepository<Task>
    {
        void Add(Task task);
    }
}
