using InvoiceAPI.Http.Request;
using InvoiceAPI.Http.Request.Task;
using InvoiceAPI.Models.Invoce.Service;
using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using NPOI.XWPF.UserModel;
using System;
using System.IO;


namespace InvoiceAPI.Models.Invoce.UseCase
{
    public class InvoceService
    {
        private readonly HourseExcelParser _hourseParser;
        private readonly FindColumnNumber _findColumn;
        private readonly WordFile _wordFile;

        public InvoceService(HourseExcelParser hourseParser, FindColumnNumber findColumn, WordFile wordFile)
        {
            this._hourseParser = hourseParser;
            this._findColumn = findColumn;
            this._wordFile = wordFile;
        }

        public Invoce.Entity.Invoce createInvoce(InvoceReques reques)
        {
            var filePath = Path.GetTempFileName();//Получаем времений путь до файла
            Invoce.Entity.Invoce invoice = null; //создаем екземпляр инвойса 

            using (var stream = new FileStream(filePath, FileMode.Create)) //открываем файл в потоке
            {
                ISheet sheet;///Экземпляр таблицы
                string sFileExtension = Path.GetExtension(reques.File.FileName).ToLower();

                reques.File.CopyTo(stream);
                stream.Position = 0;
                if (sFileExtension == ".xls")
                {
                    HSSFWorkbook hssfwb = new HSSFWorkbook(stream); //This will read the Excel 97-2000 formats  
                    sheet = hssfwb.GetSheetAt(0); //get first sheet from workbook  
                }
                else
                {
                    XSSFWorkbook hssfwb = new XSSFWorkbook(stream); //This will read 2007 Excel format  
                    sheet = hssfwb.GetSheetAt(0); //get first sheet from workbook   
                }

                int column = this._findColumn.Find(sheet.GetRow(0), "Hours");///находим нужную колонку

                invoice = new Invoce.Entity.Invoce(
                    reques.Money, //передаєм в конструктор инфойса деньги
                    this._hourseParser.Parse(sheet, column), //передаем в конструктор часы, спаршенные сервисом
                    reques.Street,
                    reques.BuildNumber,
                    reques.City,
                    reques.Country,
                    reques.IndexCity,
                    reques.TelephoneNumber,
                    reques.EMail,
                    reques.Name,
                    reques.LastName,
                    reques.Description,
                    reques.Date.ToString()
                );
            }

            if (invoice == null)
            {
                throw new Exception("Inove is not build!");
            }

            return invoice;
        }

        public void generateWork(Invoce.Entity.Invoce invoce)
        {
                XWPFDocument doc = new XWPFDocument();
                XWPFTable table = doc.CreateTable(3, 3);

                table.GetRow(1).GetCell(1).SetText(invoce.ToString());
                table.GetRow(1).GetCell(1).SetText(invoce.getFIO());

            XWPFTableCell c1 = table.GetRow(0).GetCell(0);
                XWPFParagraph p1 = c1.AddParagraph();   //don't use doc.CreateParagraph
                XWPFRun r1 = p1.CreateRun();
                r1.SetText("This is test table contents");

                r1.FontFamily = "Courier";
                r1.SetUnderline(UnderlinePatterns.DotDotDash);
                r1.SetTextPosition(100);
                //c1.SetColor("FF0000");

                table.GetRow(2).GetCell(2).SetText("only text");

                FileStream out1 = new FileStream(
                    this._wordFile.GetWritePath(),
                    FileMode.Create
                );
                doc.Write(out1);
                out1.Close();
        }
    }
}
