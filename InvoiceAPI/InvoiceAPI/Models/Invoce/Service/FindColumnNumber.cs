using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Models.Invoce.Service
{
    public class FindColumnNumber
    {
        public int Find(IRow row, string columnName)
        {
            for (int cell = 0; cell < row.LastCellNum; cell++)
            {
                if (row.GetCell(cell) == null)
                {
                    continue;
                }

                if (row.GetCell(cell).ToString().Trim() == columnName)///Значениев ячейке совпадает с переданным значение нужной колонки(Trim обрезает пробелы по бокам)
                {
                    return cell;
                }
            }

            throw new Exception("Column not foudn");
        }
    }
}
