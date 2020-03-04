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

        public Invoce(int money, int totalHourse)///Входящие значения будут приравниваться к полям класса
        {
            this.SumMoney = (money * totalHourse);
            this.TotalHourse = totalHourse;
        }

        public override string ToString()
        {
            return "Total money by hourse: " + this.SumMoney + ", hourse: " + this.TotalHourse;
        }
    }
}
