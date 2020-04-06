import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UploadService } from 'src/app/Services/upload.service';
import { forkJoin } from 'rxjs';
import { InvoiceService } from 'src/app/Services/invoice-service'
import { FormatFileService } from 'src/app/Services/formatFile.service';

@Component({
  moduleId: module.id,
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss',
  '../../../Styles/global.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('file', { static: false }) file;

  private files: Set<File> = new Set();
  private progress;
  private canBeClosed = true;
  private primaryButtonText = 'Upload';
  private showCancelButton = true;
  private uploading = false;
  private uploadSuccessful = false;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    public uploadService: UploadService,
    public invoiceService: InvoiceService,
    public fileService: FormatFileService
  ) { }

  ngOnInit() { }

  onFilesAdded() {///Нужно перенести 2
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }

  addFiles() {
    this.file.nativeElement.click();
  }

  closeDialog() {
    // if everything was uploaded already, just close the dialog
    if (this.uploadSuccessful) {
      return this.dialogRef.close();
    }

    // set the component state to "uploading"
    this.uploading = true;

    // start the upload and save the progress map
    this.progress = this.uploadService.upload(this.files);
    this.uploadService.getSheetNameArray();
    this.fileService.setFile(this.progress)
    // for (const key in this.progress) {
    //   this.progress[key].progress.subscribe(val => console.log(val));
    // }

    // convert the progress map into an array
    let allProgressObservables = [];
    for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }

    // Adjust the state variables

    // The OK-button should have the text "Finish" now
    this.primaryButtonText = 'Finish';

    // The dialog should not be closed while uploading
    this.canBeClosed = false;
    this.dialogRef.disableClose = true;

    // Hide the cancel-button
    this.showCancelButton = false;

    // When all progress-observables are completed...
    forkJoin(allProgressObservables).subscribe(end => {
      // ... the dialog can be closed again...
      this.canBeClosed = true;
      this.dialogRef.disableClose = false;

      // ... the upload was successful...
      this.uploadSuccessful = true;

      // ... and the component is no longer uploading
      this.uploading = false;
    });
  }
}
