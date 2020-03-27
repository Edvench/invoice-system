using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvoiceAPI.Models.Invoce.Entity
{
    public class Invoce
    {
        public int SumMoney { get; private set; }
        public int TotalHourse { get; private set; }
        public string FIO { get; private set; }
        public string Adress { get; private set; }
        public string Email { get; private set; }
        public int TelephoneNumber { get; private set; }
        public string Description { get; private set; }
        public string Data { get; private set; }

        public Invoce(
            int money, 
            int totalHourse, 
            string street,
            int buildNumber,
            string city,
            string country,
            int index,
            int telephoneNumber,
            string email,
            string name,
            string lastName,
            string description,
            string data)
        {
           
            this.FIO = name + " " + lastName;
            this.Adress = street + " " + buildNumber + " " + index + " " + city + " " + country;
            this.Email = email;
            this.TelephoneNumber = telephoneNumber;
            this.Description = description;
            this.SumMoney = (money * totalHourse);
            this.TotalHourse = totalHourse;
            this.Data = data;

        }


        public string getFIO() {
            return this.FIO;
        }
        public override string ToString()
        {
            return "Total money by hourse: " + this.SumMoney + ", hourse: " + this.TotalHourse;
        }
    }
}
