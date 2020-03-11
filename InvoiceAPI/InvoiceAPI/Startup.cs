using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InvoiceAPI.Framework.Db;
using InvoiceAPI.Helper;
using InvoiceAPI.Models.Invoce.Service;
using InvoiceAPI.Models.Invoce.UseCase;
using InvoiceAPI.Models.Task.Entity.Repository;
using InvoiceAPI.Models.Task.Entity.UseCase;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace InvoiceAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
            this.DICinvoce(services);
            // Enable CORS
            services.AddCors(o => o.AddPolicy("AllowAny", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));

            // получаем строку подключени€ из файла конфигурации
            string connection = Configuration.GetConnectionString("DefaultConnection");
            // добавл€ем контекст в качестве сервиса в приложение
            services.AddDbContext<SolutionContext>(options =>
                options.UseSqlServer(connection));


        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("AllowAny");

            app.UseHttpsRedirection();

            app.UseRouting();

            //app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });


            app.UseDefaultFiles();
            app.UseStaticFiles();
        }

        private void DICinvoce(IServiceCollection services)
        {
            services.AddTransient<InvoceService, InvoceService>();//ѕробрасиваем обект сервиса в консруктор если InvoceService встречаетса в конструкторе
            services.AddTransient<HourseExcelParser, HourseExcelParser>();
            services.AddTransient<FindColumnNumber, FindColumnNumber>();
            services.AddTransient<WordFile, WordFile>();
            services.AddTransient<TaskService,TaskService>();
            services.AddTransient<EFRepository, EFRepository>();
            services.AddTransient<Task, Task>();
        }
    }
}
