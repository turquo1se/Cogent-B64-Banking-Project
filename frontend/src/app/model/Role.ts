export interface Role {
    id?: number;
    name: ERole;
  }
  
export enum ERole {
    ROLE_CUSTOMER = 'ROLE_CUSTOMER',
    ROLE_STAFF = 'ROLE_STAFF',
    ROLE_ADMIN = 'ROLE_ADMIN'
}