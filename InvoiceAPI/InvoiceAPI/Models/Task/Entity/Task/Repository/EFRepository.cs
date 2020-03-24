using InvoiceAPI.Framework.Db;
using InvoiceAPI.Framework.Provider;
using InvoiceAPI.Framework.Request;
using InvoiceAPI.Http.Request;
using InvoiceAPI.Http.Request.Task;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Models.Task.Entity.Repository
{
    public class EFRepository : ITaskRepository
    {
        private SolutionContext _context;
        public EFRepository(SolutionContext context)
        {
            this._context = context;
        }

        public void Add(Task task)
        {
            try {
                this._context.Tasks.Add(task);
                this._context.SaveChanges();
            } catch (Microsoft.EntityFrameworkCore.DbUpdateException ex) {
                throw new Exception("Task not save.");
            }
        }

        public IEnumerable<Task> GetAllTasks() {

            List<Task> result = this._context.Tasks.Select(item => Task.Select(
                item.Id,
                item.Title,
                item.Description,
                item.Money,
                item.DateFoTask
                )).ToList();

            return result;
        }

        public BaseDataProvider<Task> ListTask(TaskSearchRequest search, TaskPaginationRequest request)
        {
            IQueryable<Task> query = this._context.Tasks;

            if (search.DataFrom != null && search.DataTo != null)
            {
                query = query.Where(t => t.DateFoTask >= search.DataFrom && t.DateFoTask <= search.DataTo);
            }

            //if (search.DataFrom != null)
            //{
            //    query = query.Where(t => t.DateFoTask >= search.DataFrom);
            //}


            if (search.Title != null)
            {
                query = query.Where(t => t.Title == search.Title);
            }

            return new BaseDataProvider<Task>(query, request);
        }
    }
}
