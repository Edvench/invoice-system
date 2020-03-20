using InvoiceAPI.Framework.Request;
using InvoiceAPI.Framework.Request.Interface;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Http.Request.Task
{
    public class TaskPaginationRequest : IPaginator
    {
        [Display(Name = "page")]
        public int Page { get; set; } = 1;

        [Display(Name = "perPage")]
        public int PerPage { get; set; } = 3;
    }
}
