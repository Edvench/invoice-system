using InvoiceAPI.Http.Request.Task;
using InvoiceAPI.Models.Invoce.Service;
using NPOI.HSSF.UserModel;
using NPOI.HSSF.Util;
using NPOI.SS.UserModel;
using NPOI.XSSF.UserModel;
using NPOI.XWPF.UserModel;
using System;
using System.IO;
using static NPOI.XWPF.UserModel.XWPFTable;

namespace InvoiceAPI.Models.Invoce.UseCase
{
    public class InvoceService
    {
        private readonly HourseExcelParser _hourseParser;
        private readonly FindColumnNumber _findColumn;
        private readonly WordFile _wordFile;
        private readonly GetAllSheets _getAllSheets;

        public InvoceService(HourseExcelParser hourseParser, FindColumnNumber findColumn, WordFile wordFile, GetAllSheets allsheets)
        {
            this._hourseParser = hourseParser;
            this._findColumn = findColumn;
            this._wordFile = wordFile;
            this._getAllSheets = allsheets;
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
                    sheet = hssfwb.GetSheet("January 20"); //get first sheet from workbook  
                }
                else
                {
                    XSSFWorkbook hssfwb = new XSSFWorkbook(stream); //This will read 2007 Excel format  
                    this._getAllSheets.getSheets(hssfwb);
                    sheet = hssfwb.GetSheet(reques.SheetTabName); //get first sheet from workbook  
                    
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
                    reques.ConvertDate(reques.Date)
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
            XWPFTable table = doc.CreateTable(11, 1);

            table.SetLeftBorder(XWPFBorderType.SINGLE, 3, 3, "#FFFFFF");
            table.SetRightBorder(XWPFBorderType.SINGLE, 3, 3, "#FFFFFF");
            table.SetTopBorder(XWPFBorderType.SINGLE, 3, 3, "#FFFFFF");


            XWPFTableCell cellFIO = table.GetRow(0).GetCell(0);
            XWPFTableCell cellStreetBuild = table.GetRow(1).GetCell(0);
            XWPFTableCell cellCityAndIndex = table.GetRow(2).GetCell(0);
            XWPFTableCell cellCountry = table.GetRow(3).GetCell(0);
            XWPFTableCell cellEmail = table.GetRow(4).GetCell(0);
            XWPFTableCell cellNumber = table.GetRow(5).GetCell(0);
            XWPFTableCell cellDescription = table.GetRow(6).GetCell(0);
            XWPFTableCell cellRaid = table.GetRow(7).GetCell(0);
            XWPFTableCell cellSignature = table.GetRow(8).GetCell(0);
            XWPFTableCell cellHelper = table.GetRow(9).GetCell(0);
            XWPFTableCell cellFIOEnd = table.GetRow(10).GetCell(0);

            

            cellFIO.SetText(invoce.GetFIO());
            cellStreetBuild.SetText(invoce.GetStreetBuild());
            cellCityAndIndex.SetText(invoce.GetCityAndIndex());
            cellCountry.SetText(invoce.GetCountry());
            cellEmail.SetText(invoce.GetEmail());
            cellNumber.SetText("+" + invoce.GetTelephoneNumber());
            cellDescription.SetText(invoce.GetDescription());
            cellRaid.SetText(invoce.GetRaid());
            cellSignature.SetText(invoce.GetSignature());
            cellHelper.SetText("Signature                          Data");
            cellFIOEnd.SetText(invoce.GetFIO());

            cellFIO.SetBorderBottom(XWPFBorderType.SINGLE, 3, 3, "#FFFFFF");///Убирает нижний бордер
            cellStreetBuild.SetBorderBottom(XWPFBorderType.SINGLE, 3, 3, "#FFFFFF");
            cellCityAndIndex.SetBorderBottom(XWPFBorderType.SINGLE, 3, 3, "#FFFFFF");
            cellCountry.SetBorderBottom(XWPFBorderType.SINGLE, 3, 3, "#FFFFFF");
            cellEmail.SetBorderBottom(XWPFBorderType.SINGLE, 3, 3, "#FFFFFF");
            cellNumber.SetBorderBottom(XWPFBorderType.SINGLE, 3, 3, "#FFFFFF");
            cellRaid.SetBorderBottom(XWPFBorderType.SINGLE, 3, 3, "#FFFFFF");
            cellSignature.SetBorderBottom(XWPFBorderType.SINGLE, 3, 3, "#FFFFFF");
            cellFIOEnd.SetBorderBottom(XWPFBorderType.SINGLE, 3, 3, "#FFFFFF");
            cellDescription.SetBorderBottom(XWPFBorderType.SINGLE, 3, 3, "#FFFFFF");
            cellHelper.SetBorderBottom(XWPFBorderType.SINGLE, 3, 3, "#FFFFFF");
            XWPFParagraph p1 = cellRaid.AddParagraph();
            //XSSFCellStyle raidStyle = (HSSFCellStyle)table.CreateCellStyle();//don't use doc.CreateParagraph
            //XWPFRun r1 = p1.CreateRun();
            //cellRaid.




            //r1.SetText("This is test table contents");

            //r1.FontFamily = "Courier";
            //r1.SetUnderline(UnderlinePatterns.DotDotDash);
            //r1.SetTextPosition(100);
            //r1.set
            //r1.SetColor("FF0000");

            //table.GetRow(2).GetCell(2).SetText("only text");

            FileStream out1 = new FileStream(
                this._wordFile.GetWritePath(),
                FileMode.Create
            );
            doc.Write(out1);
            out1.Close();
        }
    }
}
