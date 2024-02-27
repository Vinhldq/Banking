import { Injectable } from '@nestjs/common';
import { Account, AccountRepository, ErrAccountNotFound, Transfer } from "../../domain/account.domain";
import * as admin from 'firebase-admin';
@Injectable()
export class FirestoreRepositoryService implements AccountRepository {
  private db: admin.firestore.Firestore;
  constructor() {
    this.db = admin.firestore();
  }
  async delete(id: string): Promise<FirebaseFirestore.WriteResult> {
    return await this.db.collection('accounts').doc(id).delete().then();
  }
  async getAll(): Promise<Account[] | FirebaseFirestore.WriteResult[]> {
    return await this.db
      .collection('accounts')
      .get()
      .then((querySnapshot) => {
        let accounts: Account[] = [];
        querySnapshot.forEach((doc) => {
      accounts.push(doc.data() as Account);
        });
        return accounts;
      });
  }
  getById(id: string): Promise<FirebaseFirestore.WriteResult> {
    try {
       return this.db.collection('accounts').doc(id).get().then();
    } catch (error) {
      throw ErrAccountNotFound;
    }
  }
   async post(account: Account): Promise<FirebaseFirestore.WriteResult> {
    try {
return await this.db.collection('accounts').doc(account.id).set(account).then();
    } catch (error) {
      throw error;
    }
  }
  async put(account: Account): Promise<FirebaseFirestore.WriteResult> {
    try {
      return await this.db.collection('accounts').doc(account.id).set(account).then();
    }
    catch (error) {
      throw error;
    }
  }
  transferBalance(transfer: Transfer): any {
  }
}