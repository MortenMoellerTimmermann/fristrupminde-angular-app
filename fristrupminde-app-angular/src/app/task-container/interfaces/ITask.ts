export default interface ITask {
  id?: string;
  description: string;
  title: string;
  created: Date;
  createdBy: string;
  dueDate: Date;
  assignedTo?: string;
  completedDate?: Date;
  completedBy?: string;
}
