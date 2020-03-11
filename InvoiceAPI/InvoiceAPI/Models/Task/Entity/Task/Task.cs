using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Models.Task.Entity
{
    public class Task
    {
        public string ID = Guid.NewGuid().ToString();
        public double Money { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Date_of_Task { get; set; }
        public DateTime Created_at { get; set; }

        public static Task Create (
        double money,
        string title,
        string description,
        DateTime date_of_task
        ){
            Task task = new Task();
            task.Money = money;
            task.Title = title;
            task.Description = description;
            task.Date_of_Task = date_of_task;
            task.Created_at = date_of_task;///Установить текущему datatim??

            return task;
        }
    }



    
}
