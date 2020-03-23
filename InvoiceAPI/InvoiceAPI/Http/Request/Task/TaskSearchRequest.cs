using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Http.Request.Task
{
    public class TaskSearchRequest
    {
        [Display(Name = "dataFrom")]
        public DateTime? DataFrom { get; set; }

        [Display(Name = "dataTo")]
        public DateTime? DataTo { get; set; }
        [Display(Name = "title")]
        public string Title { get; set; }
    }
}
