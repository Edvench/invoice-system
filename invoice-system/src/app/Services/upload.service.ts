import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpEventType,
  HttpResponse
} from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { GetFileService } from './get-file.service';
import { environment } from '../../environments/environment';

@Injectable()
export class UploadService {

  private apiEndPoint: string;

  constructor(
    private http: HttpClient,
    private setData: GetFileService
    ) {
      this.apiEndPoint = environment.domainUrl;
     }



  public upload(
    files: Set<File>
  ): { [key: string]: { progress: Observable<number> } } {
    // это будет наша получившаяся карта
    const status: { [key: string]: { progress: Observable<number> } } = {};

    
    files.forEach(file => {
      // создать новую multipart-форму для каждого файла
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      
      this.setData.setFormData(formData);

      // создайте запрос http-post и передайте форму
      // скажи это, чтобы сообщить о прогрессе загрузки
      const req = new HttpRequest('POST', this.apiEndPoint + "/api/home/upload", formData, {
        reportProgress: true
      });

      // создать новую тему прогресса для каждого файла
      const progress = new Subject<number>();

      // отправьте http-запрос и подпишитесь на прогресс-обновления

      const startTime = new Date().getTime();
      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          // рассчитать процент прогресса

          const percentDone = Math.round((100 * event.loaded) / event.total);
          // передать процент в прогресс-поток
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {
          // Закройте прогресс-поток, если мы получим ответ от API
          // Загрузка завершена
          progress.complete();
        }
      });

      // Сохраните каждый наблюдаемый прогресс на карте всех наблюдаемых
      status[file.name] = {
        progress: progress.asObservable()
      };
    });

    // return the map of progress.observables
    return status;
  }

  public getFile(files: Set<File>)  {
    files.forEach(file => {
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);
      console.log(formData);
      return formData;
    });
  }

}
