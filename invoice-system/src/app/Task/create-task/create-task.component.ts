import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder,FormArray } from '@angular/forms';
import { TaskService } from 'src/app/Services/task-service';

@Component({
  moduleId: module.id,
  selector: 'app-create-task',
  templateUrl: 'create-task.component.html',
  styleUrls: ['create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  private validDate: string;
  private formGroup: FormGroup;
 
  constructor(
    private taskService: TaskService,
    private formBuilder:FormBuilder) {
    this.formGroup = formBuilder.group({
      raidControl:            ["", [
                                Validators.required,
                                Validators.pattern('^[0-9]+$')
                              ]],
      titleControl:           ["", [ Validators.required]],
      descriptionControl:     ["", [ Validators.required]]
      // dControl:            this.formBuilder.array([this.formBuilder.control('')])
    })
    
  }

  ngOnInit() { }

  getDataFromDatePicker(params):string {
    this.validDate = params.date;
    
    // this.formGroup.controls["dControl"].setValue(this.validDate)
    return this.validDate; 
  }

  public addTask() {
    this.taskService.createTaskRequest(
      this.formGroup.controls["raidControl"].value,
      this.formGroup.controls["titleControl"].value,
      this.formGroup.controls["descriptionControl"].value,
      this.validDate).
    subscribe((response: any) => {
       console.log(response) 
      });
  }

}
