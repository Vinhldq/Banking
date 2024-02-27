import { Inject, Injectable } from "@nestjs/common";
import {
  Account,
  AccountRepository,
  AccountUseCase,
  balanceMinus,
  balanceNumber,
  existAccount
} from "../../../domain/account.domain";
import { Transfer } from "../../../domain/transfer.domain";

@Injectable()
export class UseCaseService implements AccountUseCase {
  constructor(@Inject('AccountRepository') private accountRepository: AccountRepository) {
  }
    getById(id: string): Promise<FirebaseFirestore.WriteResult> {
        return this.accountRepository.getById(id);
    }
    getAll() : Promise<Account[] | FirebaseFirestore.WriteResult[]>{
      return this.accountRepository.getAll();
    }
    post(account: Account): Promise<FirebaseFirestore.WriteResult> {
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
    put(account: Account): Promise<FirebaseFirestore.WriteResult> {
        return this.accountRepository.put(account);
    }
    delete(id: string): Promise<FirebaseFirestore.WriteResult>  {
        return this.accountRepository.delete(id);
    }
  transferBalance(transfer: Transfer): void {
    this.accountRepository.transferBalance(transfer);
  }
}


