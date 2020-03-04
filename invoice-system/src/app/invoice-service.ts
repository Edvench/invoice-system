import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InvoceReques} from './invoice-request';
import {UploadService} from 'src/app/upload/upload.service';


   
@Injectable()
export class InvoiceService{
   
    constructor(
        private http: HttpClient,
        private uploadService: UploadService,
        ){ }
        request: InvoceReques = new InvoceReques;
 

    postData(money:number){
        this.request.money = money;
        let body = {money: this.request.money,file:this.request.file };
        body = this.request;
        console.log(this.request.money)
        return this.http.post('http://localhost:44315/postinvoice', this.request); 
        
    }
}