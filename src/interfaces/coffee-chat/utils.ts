import { IUser } from './IRoom'

/** Add User **/
export type IAddUser = (props: IUser) => { error?: string; user?: IUser }

/** Remove User **/
export type IRemoveUser = (id: string) => IUser

/** Get User **/
export type IGetUser = (id: string) => IUser

/** Get Users in Room **/
export type IGetUsersInRoom = (room: string) => IUser[]
