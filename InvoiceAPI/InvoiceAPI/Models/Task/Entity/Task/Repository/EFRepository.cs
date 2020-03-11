using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Models.Task.Entity.Repository
{
    public class EFRepository
    {
        private readonly Task _task;
        //private readonly EFRepository _repository = new EFRepository();

        public EFRepository(Task task)
        {
            this._task = task;
        }

        public void Add(Task task) { 
        }


    }
}
