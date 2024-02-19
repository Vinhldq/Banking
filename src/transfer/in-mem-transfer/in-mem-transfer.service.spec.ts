import { Test, TestingModule } from '@nestjs/testing';
import { InMemTransferService } from './in-mem-transfer.service';

describe('InMemTransferService', () => {
  let service: InMemTransferService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InMemTransferService],
    }).compile();

    service = module.get<InMemTransferService>(InMemTransferService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
