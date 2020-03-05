import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InvoceReques} from './invoice-request';

@Injectable()
export class InvoiceService{
   
    constructor(
        private http: HttpClient,
        private request: InvoceReques
        ){ }
 

    createRequest(money,file):InvoceReques{
        this.request = {money,file};
        console.log(this.request)
        return this.request;
    }

    postData(){
        return this.http.post('http://localhost:44315/postinvoice', this.request); 
    }
}