import {Injectable, ComponentFactoryResolver} from '@angular/core';
import { map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {InvoceRequest} from '../Entity/invoice-request';
import { UploadService } from './upload.service';
import { GetFileService } from './get-file.service';
import { environment } from '../../environments/environment';

@Injectable()
export class InvoiceService{
   
    private apiEndPoint: string;

    constructor(
        private http: HttpClient,
        private setData: GetFileService
        ){
            this.apiEndPoint = environment.domainUrl;
         }

    postData(money){
        var formData = this.setData.getFormData();///вытягиваем
        formData.append('Money', money);

        return this.http.post(this.apiEndPoint + "/home/invoce", formData, {responseType: 'blob' }); 
    }


}