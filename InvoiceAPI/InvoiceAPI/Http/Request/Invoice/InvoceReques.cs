using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Http.Request.Task
{
    public class InvoceReques
    {
        [Required]
        [Display(Name = "file")]
        public IFormFile File { get; set; }

        [Required]
        [Display(Name = "Money")]
        public int Money { get; set; }
    }
}
