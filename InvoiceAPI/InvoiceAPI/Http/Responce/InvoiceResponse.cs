using InvoiceAPI.Http.Request;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace InvoiceAPI.Http.Responce
{
    public class InvoiceResponse
    {
        public IFormFile File;

        public HttpRequestMessage Request;
    }

}
