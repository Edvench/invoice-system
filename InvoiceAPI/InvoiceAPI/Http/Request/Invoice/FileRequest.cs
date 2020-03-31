using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Http.Request.Invoice
{
    public class FileRequest
    {
        [Required]
        [Display(Name = "file")]
        public IFormFile File { get; set; }
    }
}
