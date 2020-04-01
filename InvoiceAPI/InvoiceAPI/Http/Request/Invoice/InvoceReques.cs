using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Http.Request.Task
{
    public class InvoceReques
    {
        [Required]
        [Display(Name = "file")]
        public IFormFile File { get; set; }

        [Required]
        [Display(Name = "Money")]
        public int Money { get; set; }

        [Required]
        [Display(Name = "Name")]
        public string Name { get; set; }

        [Required]
        [Display(Name = "LastName")]
        public string LastName { get; set; }

        [Required]
        [Display(Name = "Street")]
        public string Street { get; set; }

        [Required]
        [Display(Name = "BuildNumber")]
        public string BuildNumber { get; set; }

        [Required]
        [Display(Name = "City")]
        public string City { get; set; }

        [Required]
        [Display(Name = "IndexCity")]
        public int IndexCity { get; set; }

        [Required]
        [Display(Name = "Country")]
        public string Country { get; set; }

        [Required]
        [Display(Name = "EMail")]
        public string EMail { get; set; }

        [Required]
        [Display(Name = "TelephoneNumber")]
        public string TelephoneNumber { get; set; }

        [Required]
        [Display(Name = "Description")]
        public string Description { get; set; }

        [Required]
        [Display(Name = "Date")]
        public DateTime Date { get; set; }

        [Required]
        [Display(Name = "SheetTabName")]
        public string SheetTabName { get; set; }

        public string ConvertDate(DateTime date) {
            date = this.Date;
            string dayFrom = this.Date.Day.ToString();
            string monthFrom = this.Date.Month.ToString(); 
            string yearFrom = this.Date.Year.ToString();
            string resultDate = dayFrom + '-' + monthFrom + "-" + yearFrom;
            return resultDate;
        }
    }
}
