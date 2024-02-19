import { Module } from '@nestjs/common';
import { InMemTransferService } from './in-mem-transfer/in-mem-transfer.service';

@Module({
  providers: [InMemTransferService]
})
export class TransferModule {}
