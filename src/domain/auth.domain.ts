import { auth } from "firebase-admin";
import DecodedIdToken = auth.DecodedIdToken;
import { HttpException } from "@nestjs/common";

export interface AuthRepository {
  verifyToken(token: string): Promise<DecodedIdToken>;
}
export interface AuthUseCase {
  verifyToken(token: string): Promise<DecodedIdToken>;
}

export const unauthorized = new HttpException('Unauthorized', 401)

export class ErrMessUnauthorized {
}