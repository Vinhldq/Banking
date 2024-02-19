import { Injectable } from '@nestjs/common';
import { Account, AccountRepository } from "../../domain/account.domain";
import { DictionaryInt } from "../../utils/dictonary";

@Injectable()
export class InMemAccountService implements AccountRepository {
    private accounts: DictionaryInt<Account>

  constructor() {
      this.accounts = {};
  }
    getById(id: number): Account {
        return this.accounts[id];
    }
    post(account: Account): Account {
      return this.accounts[account.id] = account;
    }
    put(account: Account): Account {
        return this.accounts[account.id] = account;
    }
    delete(id: number): Account {
        delete this.accounts[id];
        return null;
    }
}