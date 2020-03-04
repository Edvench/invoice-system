using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InvoiceAPI.Models.Invoce.Service;
using InvoiceAPI.Models.Invoce.UseCase;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
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
            services.AddCors();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });


            app.UseCors(builder => builder.WithOrigins("http://localhost:4200"));
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }

        private void DICinvoce(IServiceCollection services)
        {
            services.AddTransient<InvoceService, InvoceService>();//������������ ����� ������� � ���������� ���� InvoceService ����������� � ������������
            services.AddTransient<HourseExcelParser, HourseExcelParser>();
            services.AddTransient<FindColumnNumber, FindColumnNumber>();
            services.AddTransient<WordFile, WordFile>();
        }
    }
}