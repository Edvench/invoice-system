import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {InvoceRequest} from '../Entity/invoice-request';
import { UploadService } from './upload.service';
import { GetFileService } from './get-file.service';

@Injectable()
export class InvoiceService{
   
    constructor(
        private http: HttpClient,
        private request: InvoceRequest,
        private upload:UploadService,
        private setData: GetFileService
        ){ }
 

    createRequest(money, file):InvoceRequest{
        this.request = {money, file};
        console.log(this.request)
        return this.request;
    }

    postData(){
        var formData = this.setData.getFormData();
        formData.append('Money', this.request.money);

        const headers: HttpHeaders = new HttpHeaders()
        .set('Accept', 'application/octet-stream')
        .set('Content-Range', 'bytes 0-1023/2048');

        return this.http.post('https://localhost:44315/api/home/invoce', formData, {headers: headers }); //, this.request
    }
}