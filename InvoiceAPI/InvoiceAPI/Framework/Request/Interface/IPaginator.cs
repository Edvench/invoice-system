using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Framework.Request.Interface
{
    public interface IPaginator
    {
        public int Page { get; set; }

        public int PerPage { get; set; }
    }
}
