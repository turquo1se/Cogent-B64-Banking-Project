export class Account {
    accNumber: number = 0;
    accType: string = '';
    accBalance: number = 0;
    status: Status = Status.ENABLE;
  }

export enum Status {
    ENABLE = 'ENABLE',
    DISABLE = 'DISABLE'
}