import { Inject, Injectable } from "@nestjs/common";
import { Account, AccountInterop, AccountUseCase } from "../../../domain/account.domain";
import { UsecaseService } from "../usecase/usecase.service";
import { Transfer } from "../../../domain/transfer.domain";

@Injectable()
export class InteropService implements AccountInterop {
  constructor(@Inject('AccountUseCase')private accountUseCase:AccountUseCase) {
  }
    getById(token: string, id: number): Account {
        return this.accountUseCase.getById(id);
    }
    post(token: string, account: Account): Account {
        return this.accountUseCase.post(account);
    }
    put(token: string, account: Account): Account {
        return this.accountUseCase.put(account);
    }
    delete(token: string, id: number): Account {
        return this.accountUseCase.delete(id);
    }
    getAll(token: string): Account[] {
        return this.accountUseCase.getAll();
    }
    transferBalance(token: string, transfer: Transfer): void {
      return this.accountUseCase.transferBalance(transfer);
    }
}
