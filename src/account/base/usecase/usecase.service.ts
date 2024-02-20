import { Inject, Injectable } from "@nestjs/common";
import {
  Account,
  AccountRepository,
  AccountUseCase,
  balanceMinus,
  balanceNumber,
  existAccount
} from "../../../domain/account.domain";
import { InMemAccountService } from "../../in-mem-account/in-mem-account.service";
import { Transfer } from "../../../domain/transfer.domain";

@Injectable()
export class UsecaseService implements AccountUseCase {
  constructor(@Inject('AccountRepository') private accountRepository: AccountRepository) {
  }
    getById(id: number): Account {
        return this.accountRepository.getById(id);
    }
    getAll() {
      return this.accountRepository.getAll();
    }
    post(account: Account): Account {
        const existingAccount = this.accountRepository.getById(account.id);
        if (existingAccount) {
          console.log('Account already exists');
            throw  existAccount;
        }
        const isNegative = account.balance >= 0;
        if (!isNegative) {
          console.log('Balance cannot be minus');
            throw balanceMinus;
        }
        const isNumber = typeof account.balance === 'number';
        if (!isNumber) {
          console.log('Balance must be a number');
            throw balanceNumber;
        }
        return this.accountRepository.post(account);
    }
    put(account: Account): Account {
        return this.accountRepository.put(account);
    }
    delete(id: number): Account {
        return this.accountRepository.delete(id);
    }
  transferBalance(transfer: Transfer): void {
    const fromAccount = this.accountRepository.getById(transfer.fromAccountId);
    const toAccount = this.accountRepository.getById(transfer.toAccountId);
    if (fromAccount.balance < transfer.amount) {
      console.log('Insufficient balance');
      throw new Error('Insufficient balance');
    }
    this.accountRepository.put({ ...fromAccount, balance: fromAccount.balance - transfer.amount });
    this.accountRepository.put({ ...toAccount, balance: toAccount.balance + transfer.amount });
  }
}

