import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatFileService {

  private uploadFile: Set<File>;
  private formData: FormData;

  constructor() { }

  public setFile(file) {
    this.uploadFile = file;
  }

  public getFile() {
    return this.uploadFile;
  }

  public getFormData() {
    return this.formData;
  }

  public setFormData(formData) {
    this.formData = formData;
  }

}
