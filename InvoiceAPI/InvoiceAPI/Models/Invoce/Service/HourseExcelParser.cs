using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Models.Invoce.Service
{
    public class HourseExcelParser
    {
        public int Parse(ISheet sheet, int hourseColumn)
        {
            int hourse = 0;///Переменная для хранения наших часов с документа
            for (int i = (sheet.FirstRowNum + 1); i <= sheet.LastRowNum; i++) //Read Excel File
            {
                IRow row = sheet.GetRow(i);

                if (row == null)
                {
                    continue;
                }

                if (row.Cells.All(d => d.CellType == CellType.Blank))
                {
                    continue;
                }

                if (row.GetCell(hourseColumn) != null)
                {
                    int cellHourse = 0;
                    if (int.TryParse(row.GetCell(hourseColumn).ToString(), out cellHourse) == true)
                    {
                        hourse += cellHourse;
                    }
                }
            }

            return hourse;
        }
    }
}
