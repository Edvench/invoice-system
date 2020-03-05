import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {InvoceRequest} from '../Entity/invoice-request';

@Injectable()
export class InvoiceService{
   
    constructor(
        private http: HttpClient,
        private request: InvoceRequest
        ){ }
 

    createRequest(money,file):InvoceRequest{
        this.request = {money,file};
        console.log(this.request)
        return this.request;
    }

    postData(){
        return this.http.post('http://localhost:44315/postinvoice', this.request); 
    }
}