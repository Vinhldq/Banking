import { Inject, Injectable } from "@nestjs/common";
import { Account, AccountInterop, AccountUseCase } from "../../../domain/account.domain";
import { Transfer } from "../../../domain/transfer.domain";
import { AuthUseCase,ErrMessUnauthorized } from "../../../domain/auth.domain";
@Injectable()
export class InteropService implements AccountInterop {
  constructor(
    @Inject('AccountUseCase')private accountUseCase:AccountUseCase,
    @Inject('AuthUseCase') private authUseCase: AuthUseCase,
  ) {
  }
  async getById(token: string, id: string): Promise<FirebaseFirestore.WriteResult>  {
    try {
      let decodedToken = await this.authUseCase.verifyToken(token);
      let account = await this.accountUseCase.getById(decodedToken.uid);
      return account;
    } catch (error) {
      throw ErrMessUnauthorized;
    }
    return this.accountUseCase.getById(id);
  }
  async post(token: string, account: Account) {
    try {
      let decodedToken = await this.authUseCase.verifyToken(token);
      account.id = decodedToken.uid;
      return this.accountUseCase.post(account);
    } catch (error) {
      throw error;
    }
  }
    put(token: string, account: Account): Promise<FirebaseFirestore.WriteResult>  {
    let decodedToken = this.authUseCase.verifyToken(token);
        return this.accountUseCase.put(account);
    }
    delete(token: string, id: string): Promise<FirebaseFirestore.WriteResult>  {
    let decodedToken = this.authUseCase.verifyToken(token);
        return this.accountUseCase.delete(id);
    }
    getAll(token: string):Promise<Account[] | FirebaseFirestore.WriteResult[]> {
    let decodedToken = this.authUseCase.verifyToken(token);
        return this.accountUseCase.getAll();
    }
    transferBalance(token: string, transfer: Transfer): void {
    let decodedToken = this.authUseCase.verifyToken(token);
      return this.accountUseCase.transferBalance(transfer);
    }
}
