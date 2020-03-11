using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using InvoiceAPI.Models.Task.Entity;

namespace InvoiceAPI.Framework.Db
{
    public class SolutionContext: DbContext
    {
        public DbSet<Task> Tasks { get; set; }

        public SolutionContext(DbContextOptions<SolutionContext> options)
            : base(options)
        {
            Database.EnsureCreated();   // создаем базу данных при первом обращении
        }
    }
}
