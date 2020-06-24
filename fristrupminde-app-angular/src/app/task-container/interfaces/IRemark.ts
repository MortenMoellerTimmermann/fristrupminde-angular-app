import { DatePipe } from "@angular/common";

export default interface IRemark {
  id: string;
  projectTaskID: string;
  description: string;
  createdBy: string;
  created: Date;
}
