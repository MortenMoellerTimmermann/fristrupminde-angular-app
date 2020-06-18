import IRemark from "./IRemark";
import IUser from "../../authentication/interfaces/IUser";

export default interface IDetailsTask {
  usersOnTask: Array<IUser>;
  remarks: Array<IRemark>;
}
