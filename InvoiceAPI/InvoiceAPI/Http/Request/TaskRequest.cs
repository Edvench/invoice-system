using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Http.Request.Task
{
    public class TaskRequest
    {
        public double Money { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Date_of_task { get; set; }
    }
}
