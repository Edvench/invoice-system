import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetFileService {

  constructor() { }

  uploadFile;

  public setFile(file){
    this.uploadFile = file;
  }

  public getFile(){
    return this.uploadFile;
  }
}
