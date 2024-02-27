import { HttpException, Injectable } from "@nestjs/common";
import { AuthRepository, unauthorized } from "../../domain/auth.domain";
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import * as admin from 'firebase-admin';
@Injectable()
export class AuthRepoService implements AuthRepository {
    auth: admin.auth.Auth;

    constructor() {
      this.auth = admin.auth();
    }
    async verifyToken(token: string): Promise<DecodedIdToken> {
      try {
        let result = await this.auth.verifyIdToken(token);
        if(result.uid != null){
          throw unauthorized;
        }
        return result;
      } catch (error) {
        throw unauthorized;
      }
    }
}
