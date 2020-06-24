export default interface IUser {
  username: string;
  email: string;
  avatar?: string;
  isAdmin?: boolean;
  isSystem?: boolean;
}
