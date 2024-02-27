import { HttpException, HttpStatus } from "@nestjs/common";

export interface Account {
  id: string;
  username: string;
  balance: number;
}
export interface Transfer {
  fromAccountId: number;
  toAccountId: number;
  amount: number;
}
export interface AccountRepository {
  getById(id: string):Promise<FirebaseFirestore.WriteResult>;
  post(account: Account): Promise<FirebaseFirestore.WriteResult>;
  put(account: Account): Promise<FirebaseFirestore.WriteResult>;
  delete(id: string): Promise<FirebaseFirestore.WriteResult>;

  getAll(): Promise<Account[] | FirebaseFirestore.WriteResult[]>;
  transferBalance(transfer: Transfer): void;
}
export interface AccountUseCase {
  getById(id: string):Promise<FirebaseFirestore.WriteResult>;
  post(account: Account): Promise<FirebaseFirestore.WriteResult>;
  put(account: Account): Promise<FirebaseFirestore.WriteResult>;
  delete(id: string): Promise<FirebaseFirestore.WriteResult>;
  getAll(): Promise<Account[] | FirebaseFirestore.WriteResult[]>;
  transferBalance(transfer: Transfer): void;
}
export interface AccountInterop {
  getById(token:string,id: string):  Promise<FirebaseFirestore.WriteResult>;
  post(token:string,account: Account): Promise<FirebaseFirestore.WriteResult>;
  put(token:string,account: Account): Promise<FirebaseFirestore.WriteResult>;
  delete(token:string,id: string): Promise<FirebaseFirestore.WriteResult>;
  getAll(token:string): Promise<Account[] | FirebaseFirestore.WriteResult[]>;
  transferBalance(token: string, transfer: Transfer): void;
}

export const existAccount = new HttpException('Account already exists', HttpStatus.BAD_REQUEST)
export const balanceMinus = new HttpException('Balance cannot be minus', HttpStatus.BAD_REQUEST)
export const balanceNumber = new HttpException('Balance must be a number', HttpStatus.BAD_REQUEST)

export const ErrAccountNotFound = new HttpException(
  'Account not found',
  HttpStatus.NOT_FOUND,
);
