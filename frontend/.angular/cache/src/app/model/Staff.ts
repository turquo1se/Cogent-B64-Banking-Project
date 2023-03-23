import { User } from "./User";

export interface Staff{
    staffId?: number;
    staffFullname: string;
    status: Status;
    user: User;
}

export enum Status{
    ENABLE = "ENABLE",
    DISABLE = "DISABLE"
}