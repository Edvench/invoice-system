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
        public string StreetBuild { get; private set; }

        public string CityAndIndex { get; private set; }
        public string Country { get; private set; }
        public string Email { get; private set; }
        public string TelephoneNumber { get; private set; }
        public string Description { get; private set; }
        public string Data { get; private set; }

        public Invoce(
            int money, 
            int totalHourse, 
            string street,
            string buildNumber,
            string city,
            string country,
            int index,
            string telephoneNumber,
            string email,
            string name,
            string lastName,
            string description,
            string data)
        {
           
            this.FIO = lastName + " " + name;
            this.StreetBuild = street + " " + buildNumber;
            this.CityAndIndex = index + " " + city;
            this.Country = country;
            this.Email = email;
            this.TelephoneNumber = telephoneNumber;
            this.Description = description;
            this.SumMoney = (money * totalHourse);
            this.TotalHourse = totalHourse;
            this.Data = "___________________" + data;

        }


        public string GetFIO() {
            return this.FIO;
        }

        public string GetStreetBuild() {
            return this.StreetBuild;
        }
        public string GetCityAndIndex()
        {
            return this.CityAndIndex;
        }
        public string GetCountry()
        {
            return this.Country;
        }
        public string GetEmail()
        {
            return this.Email;
        }

        public string GetTelephoneNumber()
        {
            return this.TelephoneNumber;
        }
        public string GetDescription()
        {
            return this.Description;
        }
        public string GetSignature()
        {
            return this.Data;
        }
        public string GetRaid()
        {
            return "Amount USD: " + this.SumMoney;
        }
    }
}
