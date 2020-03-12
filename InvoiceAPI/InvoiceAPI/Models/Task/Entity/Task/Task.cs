using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;

namespace InvoiceAPI.Models.Task.Entity
{
    public class Task
    {
        //public GuidAttribute(string guid);
        [Column("id", TypeName = "UNIQUEIDENTIFIER")]
        public Guid Id { get; private set; }

        [Required]
        [Column("money", TypeName = "money")]
        public double Money { get; private set; }
        
        [Required]
        [Column("title", TypeName = "varchar(50)")]
        public string Title { get; private set; }

        [Column("description", TypeName = "text")]
        public string? Description { get; private set; }

        [Column("date_fo_task", TypeName = "datetime2")]
        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime DateFoTask { get; private set; }

        [Column("created_at",TypeName = "datetime2")]
        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime CreatedAt { get; private set ; } //DateTime.ParseExact(yourObject.ToString(), "MM/dd/yyyy hh:mm:ss tt", CultureInfo.InvariantCulture);

        public static Task Create (
        double money,
        string title,
        string description,
        DateTime dateOfTask
        ) {
            Task task = new Task();

            task.Money = money;
            task.Title = title;
            task.Description = description;
            task.DateFoTask = dateOfTask;
            task.CreatedAt = DateTime.Now;///Установить текущему datatim??

            return task;
        }
    }



    
}
