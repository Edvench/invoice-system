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
        public int BuildNumber { get; set; }

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
        public int TelephoneNumber { get; set; }

        [Required]
        [Display(Name = "Description")]
        public string Description { get; set; }

        [Required]
        [DisplayFormat(DataFormatString = "{dd/M/yyyy hh:mm:ss}", ApplyFormatInEditMode = true)]
        public DateTime Date { get; set; }
    }
}
