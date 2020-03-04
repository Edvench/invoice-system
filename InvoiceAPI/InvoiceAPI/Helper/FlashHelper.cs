using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InvoiceAPI.Helper
{
    public static class FlashHelper
    {
        public static void FlashInfo(this Controller controller, string message)
        {
            controller.TempData["info"] = message;
        }
        public static void FlashWarning(this Controller controller, string message)
        {
            controller.TempData["warning"] = message;
        }
        public static void FlashError(this Controller controller, string message)
        {
            controller.TempData["error"] = message;
        }

        public static string Flash(this HtmlHelper helper)
        {
            var message = "";

            if (helper.TempData["info"] != null)
            {
                message = helper.ViewContext.TempData["info"].ToString();
            }

            if (helper.TempData["warning"] != null)
            {
                message = helper.ViewContext.TempData["warning"].ToString();
            }

            if (helper.TempData["error"] != null)
            {
                message = helper.ViewContext.TempData["error"].ToString();
            }

            var sb = new StringBuilder();

            if (String.IsNullOrEmpty(message) == false)
            {
                sb.Append(message);
            }

            return sb.ToString();
        }
    }
}
