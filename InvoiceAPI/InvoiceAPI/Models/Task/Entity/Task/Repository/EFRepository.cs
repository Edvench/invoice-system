using InvoiceAPI.Framework.Db;
using InvoiceAPI.Framework.Provider;
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

        public BaseDataProvider<Task> ListTask(double money, int page = 1)
        {
            BaseDataProvider<Task> dataProvider = new BaseDataProvider<Task>(
                this._context.Tasks.Where(x => x.Title == "task2"), //Все ахуєно робить ми неправильно скіпали запісі, кароч дата провайдер гатов!! юзай
                page,
                5
            );

            return dataProvider.getCollection();
        }
    }
}
