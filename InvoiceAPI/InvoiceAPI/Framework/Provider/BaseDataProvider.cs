using System.Collections.Generic;
using System.Linq;

namespace InvoiceAPI.Framework.Provider
{
    public class BaseDataProvider<T> where T : class
    {
        public int TotalCountRecord { get; private set; }

        public int CurrentCountRecord { get; private set; }

        public int PageSize { get; private set; }

        public int PageCount { get; private set; }

        public int CurrentPage { get; private set; }

        public List<T> Collection { get; private set; }

        public IQueryable<T> Query { get; set; }

        public BaseDataProvider(IQueryable<T> query, int currentPage, int pageSize = 2)
        {
            this.Query = query;
            this.CurrentPage = currentPage;
            this.PageSize = pageSize;
        }

        public BaseDataProvider<T> getCollection()
        {
            int skip = 0;
            if (this.CurrentPage > 0)
            {
                skip = (this.CurrentPage * this.PageSize);
            }

            this.TotalCountRecord = this.Query.Count();
            this.Collection = this.Query.Skip(skip).Take(this.PageSize).ToList();///skip - пропускает определенное кол-во елементов,take - извлекает определенное кол-во ел.
            this.CurrentCountRecord = this.Collection.Count();
            this.PageCount = (this.TotalCountRecord / (this.PageSize <= 0 ? 1 : this.PageSize));

            this.Query = null;

            return this;
        }
    }
}