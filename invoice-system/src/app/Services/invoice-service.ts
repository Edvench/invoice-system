import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormatFileService } from './formatFile.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class InvoiceService {

    private apiEndPoint: string;

    constructor(
        private http: HttpClient,
        private fileService: FormatFileService
    ) {
        this.apiEndPoint = environment.domainUrl;
    }

    public postData(
        money: number,
        firstName: string,
        lastName: string,
        street: string,
        buildNumber: string,
        index: number,
        city: string,
        country: string,
        email: string,
        telephoneNumber: number,
        description: string,
        date: string,
        tabName: string
    ): Observable<any> {
        var formData = new FormData();
        formData = this.fileService.getFormData();///получаем файл
        formData.append('Money', money.toString());
        formData.append('Name', firstName);
        formData.append('LastName', lastName);
        formData.append('Street', street);
        formData.append('BuildNumber', buildNumber);
        formData.append('IndexCity', index.toString());
        formData.append('City', city);
        formData.append('Country', country);
        formData.append('EMail', email);
        formData.append('TelephoneNumber', telephoneNumber.toString());
        formData.append('Description', description);
        formData.append('Date', date);
        formData.append('SheetTabName', tabName);
        return this.http.post(this.apiEndPoint + "/home/invoce", formData, { responseType: 'blob' });
    }
}