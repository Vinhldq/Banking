import { Module } from '@nestjs/common';
import { AuthRepoService } from "./auth-repo/auth-repo.service";
import { AuthUsecaseService } from "./auth-usecase/auth-usecase.service";

@Module({
  providers: [
    {
      provide: 'AuthRepository',
      useClass: AuthRepoService
    },
    {
      provide: 'AuthUseCase',
      useClass: AuthUsecaseService
    },

  ],
  exports: ['AuthRepository', 'AuthUseCase']
})
export class AuthModule {}
