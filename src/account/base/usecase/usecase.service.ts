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
}
export function transferMoney(from: Account, to: Account, amount: number): Account {
  from.balance -= amount;
  to.balance += amount;
  return from;
}

