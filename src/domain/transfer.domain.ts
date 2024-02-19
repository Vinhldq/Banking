import { Account } from "./account.domain";

export interface Transfer {
  fromAccountId: number;
  toAccountId: number;
  amount: number;
}
export interface TransferRepository {
  transferBalance(transfer: Transfer): void;
}
export interface TransferUseCase {
  transferBalance(transfer: Transfer): void;
}
export interface TransferInterop {
  transferBalance(token: string, transfer: Transfer): void;
}





