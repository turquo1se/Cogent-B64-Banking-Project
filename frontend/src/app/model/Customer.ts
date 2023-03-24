import { User } from "./User";

export interface Customer {
    customerId: number;
    user: User;
    fullname: string;
    phone: string;
    pan: string;
    aadhar: string;
    secretQuestion: number;
    secretAnswer: string;
    status: Status;
}

export enum Status{
    ENABLE = "ENABLE",
    DISABLE = "DISABLE"
}