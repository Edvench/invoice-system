using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Models.Task.Entity
{
    public class Task
    {
        public string Id { get; private set; }
        public double Money { get; private set; }
        public string Title { get; private set; }
        public string Description { get; private set; }
        public DateTime DateFoTask { get; private set; }
        public DateTime CreatedAt { get; private set; }

        public static Task Create (
        string id,
        double money,
        string title,
        string description,
        DateTime dateOfTask
        ) {
            Task task = new Task();

            task.Id = id;
            task.Money = money;
            task.Title = title;
            task.Description = description;
            task.DateFoTask = dateOfTask;
            task.CreatedAt = (new DateTime());///Установить текущему datatim??

            return task;
        }
    }



    
}
