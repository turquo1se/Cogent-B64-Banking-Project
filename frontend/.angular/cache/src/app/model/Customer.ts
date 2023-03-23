import { User } from "./User";

export interface Customer {
    customerId?: number;
    user: User;
    fullname: string;
    phone: string;
    pan: string;
    aadhar: string;
    secretQuestion: number;
    secretAnswer: string;
    pan2?: File;
    aadhar2?: File;
}