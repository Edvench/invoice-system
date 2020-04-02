using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Http.Responce
{
    public class TaskCreateResponcecs
    {
        public int Code { get; private set; }
        public string Message { get; private set; }

        public TaskCreateResponcecs(int code, string message) {
            Code = code;
            Message = message;
        }
    }
}
