using InvoiceAPI.Framework.Db;
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

    }
}
