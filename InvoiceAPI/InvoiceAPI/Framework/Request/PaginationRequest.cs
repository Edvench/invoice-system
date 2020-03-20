using InvoiceAPI.Framework.Request.Interface;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Framework.Request
{
    abstract public class PaginationRequest : IPaginator
    {

        [Display(Name = "page")]
        public int Page { get; set; } = 1;

        [Display(Name = "perPage")]
        public int PerPage { get; set; } = 25;
    }
}
