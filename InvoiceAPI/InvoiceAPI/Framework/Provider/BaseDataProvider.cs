using InvoiceAPI.Framework.Request;
using InvoiceAPI.Framework.Request.Interface;
using System;
using System.Collections.Generic;
using System.Linq;

namespace InvoiceAPI.Framework.Provider
{
    public class BaseDataProvider<T> where T : class
    {
        public int TotalCountRecord { get; private set; }

        public int CurrentCountRecord { get; private set; }

        public int SkipCountRecord { get; private set; }

        public int PageSize { get; private set; }

        public int PageCount { get; private set; }

        public int CurrentPage { get; private set; }

        public List<T> Collection { get; private set; }///Записи для одной итерации

        private IQueryable<T> query { get; set; }///Выборка из бд


        public BaseDataProvider(IQueryable<T> query, IPaginator paginator)
        {
            this.query = query;
            this.CurrentPage = paginator.Page;
            this.PageSize = paginator.PerPage;

            this.SkipCountRecord = ((((this.CurrentPage <= 0) ? 1 : this.CurrentPage) - 1) * this.PageSize);

            this.TotalCountRecord = this.query.Count();
            this.Collection = this.query.Skip(this.SkipCountRecord).Take(this.PageSize).ToList();///skip - пропускает определенное кол-во елементов,take - извлекает определенное кол-во ел.
            this.CurrentCountRecord = this.Collection.Count();

            this.PageCount = Convert.ToInt32(Math.Ceiling((double)this.TotalCountRecord / (this.PageSize <= 0 ? 1 : this.PageSize)));
        }
    }
}