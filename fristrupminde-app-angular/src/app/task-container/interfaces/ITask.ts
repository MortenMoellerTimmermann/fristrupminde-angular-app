export default interface ITask {
  id?: string;
  description: string;
  title: string;
  created: Date;
  dueDate: Date;
  assignedTo?: string;
}
