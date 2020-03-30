using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Http.Request.Task
{
    public class TaskRequest
    {
        [Required]
        public double Money { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        [DisplayFormat(DataFormatString = "{dd/M/yyyy hh:mm:ss}", ApplyFormatInEditMode = true)]
        public DateTime DateOfTask { get; set; }

    }
}
