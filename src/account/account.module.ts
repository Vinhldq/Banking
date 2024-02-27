import { Module } from '@nestjs/common';
import { UseCaseService } from './base/usecase/use-case.service';
import { InteropService } from './base/interop/interop.service';
import { AccountController } from './account.controller';
import { AuthModule } from "../auth/auth.module";
import { FirestoreRepositoryService } from './firestore-repository/firestore-repository.service';

@Module({
  providers: [{
    provide: 'AccountRepository',
    useClass: FirestoreRepositoryService
  },{
    provide: 'AccountUseCase',
    useClass: UseCaseService
  },{
    provide: 'AccountInterop',
    useClass: InteropService
  },],
  controllers: [AccountController],
  exports: ['AccountRepository', 'AccountUseCase', 'AccountInterop'],
  imports: [AuthModule]
})
export class AccountModule {}
