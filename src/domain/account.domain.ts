import { HttpException, HttpStatus } from "@nestjs/common";

export interface Account {
  id: number;
  username: string;
  balance: number;
}
export interface AccountRepository {
  getById(id: number): Account;
  post(account: Account): Account;
  put(account: Account): Account;
  delete(id: number): Account;
}
export interface AccountUseCase {
  getById(id: number): Account;
  post(account: Account): Account;
  put(account: Account): Account;
  delete(id: number): Account;
}
export interface AccountInterop {
  getById(token:string,id: number): Account;
  post(token:string,account: Account): Account;
  put(token:string,account: Account): Account;
  delete(token:string,id: number): Account;
}
export const existAccount = new HttpException('Account already exists', HttpStatus.BAD_REQUEST)
export const balanceMinus = new HttpException('Balance cannot be minus', HttpStatus.BAD_REQUEST)
export const balanceNumber = new HttpException('Balance must be a number', HttpStatus.BAD_REQUEST)
