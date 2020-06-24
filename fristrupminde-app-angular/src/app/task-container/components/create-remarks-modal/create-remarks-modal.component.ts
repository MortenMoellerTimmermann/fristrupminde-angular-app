import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import ITask from "../../interfaces/ITask";
import { TaskService } from "../../services/tasks/task.service";
import ICreateRemark from "../../interfaces/ICreateRemark";

@Component({
  selector: "app-create-remarks-modal",
  templateUrl: "./create-remarks-modal.component.html",
  styleUrls: ["./create-remarks-modal.component.scss"],
})
export class CreateRemarksModalComponent implements OnInit {
  @Input() openModal: boolean;
  @Input() task: ITask;
  @Output() onCloseModalEvent: EventEmitter<any> = new EventEmitter();

  subscription: any;
  description: string;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onCloseModal(): void {
    this.onCloseModalEvent.emit();
  }

  onSubmit(): void {
    let createRemark = <ICreateRemark>{};
    createRemark.description = this.description;
    createRemark.taskID = this.task.id;
    this.subscription = this.subscription = this.taskService
      .createRemark(createRemark)
      .subscribe(
        (success) => {
          this.description = "";
          this.onCloseModal();
        },
        (err) => {}
      );
  }
}
