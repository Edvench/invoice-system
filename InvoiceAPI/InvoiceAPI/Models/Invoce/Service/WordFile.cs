using InvoiceAPI.Helper;
using Microsoft.AspNetCore.Hosting;
using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;

namespace InvoiceAPI.Models.Invoce.Service
{
    public class WordFile
    {
        public const string FILE_NAME = "DocumentWithInvoce.docx";
        public const string FILE_TYPE_RESPONSE = "application/msword";

        private string _writePath;
        private string _readPath;
        private IHostingEnvironment _env;

        public WordFile(IHostingEnvironment env)
        {
            this._writePath = ResourceHelper.INTERPOINT_FOLDER + '/' + ResourceHelper.INVOCE_FOLDER + '/' + WordFile.FILE_NAME;
            this._readPath = ResourceHelper.INTERPOINT_FOLDER + '\\' + ResourceHelper.INVOCE_FOLDER + '\\' + WordFile.FILE_NAME;
            this._env = env;
        }

        public string GetWritePath()///путь на запись
        {
            return this._writePath;
        }

        public string GetReadPath()///Путь на чтение
        {
            if (File.Exists(this._writePath) == false)
            {
                throw new Exception("File not exist!");
            }

            return Path.Combine(this._env.ContentRootPath, this._readPath);
        }

    }
}
