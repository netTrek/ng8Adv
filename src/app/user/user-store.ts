import { User } from './user';

export interface UserStore {
  users: User[],
  loading: boolean,
  error: boolean,
  err: any | undefined,
  success: boolean
}
