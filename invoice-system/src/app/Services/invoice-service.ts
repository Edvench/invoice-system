import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
        console.log(this.request);
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');

        return this.http.get('https://localhost:44315/api/home/get',{ headers: headers }); //, this.request
    }
}