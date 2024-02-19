import { Module } from '@nestjs/common';
import { InMemAccountService } from './in-mem-account/in-mem-account.service';
import { UsecaseService } from './base/usecase/usecase.service';
import { InteropService } from './base/interop/interop.service';
import { AccountController } from './account.controller';

@Module({
  providers: [{
    provide: 'AccountRepository',
    useClass: InMemAccountService
  },{
    provide: 'AccountUseCase',
    useClass: UsecaseService
  },{
    provide: 'AccountInterop',
    useClass: InteropService
  }],
  controllers: [AccountController],
  exports: ['AccountRepository', 'AccountUseCase', 'AccountInterop']
})
export class AccountModule {}
