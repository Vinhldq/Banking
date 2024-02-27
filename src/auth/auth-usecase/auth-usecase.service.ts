import { Inject, Injectable } from "@nestjs/common";
import { AuthRepository, AuthUseCase } from "../../domain/auth.domain";
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

@Injectable()
export class AuthUsecaseService implements AuthUseCase {
    constructor(@Inject('AuthRepository')private authRepository:AuthRepository) {
    }
    verifyToken(token: string): Promise<DecodedIdToken> {
        return this.authRepository.verifyToken(token);
    }
}
