using DocumentFormat.OpenXml.Spreadsheet;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Models.Invoce.Service
{
    public class GetAllSheets
    {
        public List<string> getSheets(XSSFWorkbook wb)
        {
            List<string> nameList = new List<string>();

            int i = 0;
            while (i < wb.NumberOfSheets)
            {
                nameList.Add(wb.GetSheetAt(i).SheetName);
                i++;
            }

            return nameList;
        }
    }
}
