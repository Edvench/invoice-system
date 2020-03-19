using InvoiceAPI.Models.Task.Entity;
using System;
using System.Collections.Generic;

namespace InvoiceAPI.Helper
{
    public class PaginationHelper
    {
        public int CurrentPage { get; private set; }
        public int TotalPages { get; private set; }
        public int PageSize { get; private set; }
        public int TotalCount { get; private set; }
        
        public bool HasPreviousPage ///Поле для проверки(номер страницы всегда должен быть больше 1)
        {
            get
            {
                return (CurrentPage > 1);
            }
        }

        public bool HasNextPage
        {
            get
            {
                return (CurrentPage < TotalPages);
            }
        }

        //public PaginationHelper(List<Task> tasks, int totalCount,int pageNumber,int pageSize)
        //{
        //    List<Task> list = new List<Task>();
        //    TotalCount = totalCount;
        //    CurrentPage = pageNumber;
        //    PageSize = pageSize;
        //    TotalPages = (int)Math.Ceiling(totalCount / (double)pageSize);
        //    List<Task> result = list.AddRange(tasks);
        //}
    }
}
