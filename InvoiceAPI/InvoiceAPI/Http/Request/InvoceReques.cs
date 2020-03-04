using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Http.Request
{
    public class InvoceReques
    {
        public IFormFile File { get; set; }
        public int Money { get; set; }
    }
}
