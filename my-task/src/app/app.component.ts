import {Component} from '@angular/core';
import {ServiceTaskService} from "./service/service-task.service";
import {MyTask} from "./model/MyTask";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-task';
  // @ts-ignore
  myTask: MyTask;


  constructor(private service: ServiceTaskService) {
    this.getTask()
  }

  getTask() {

    this.service.getTask().subscribe(
      data => {
        console.log(data)
        this.myTask = data
      }
    )
  }


}
