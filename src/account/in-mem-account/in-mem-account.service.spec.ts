import { Test, TestingModule } from '@nestjs/testing';
import { InMemAccountService } from './in-mem-account.service';

describe('InMemAccountService', () => {
  let service: InMemAccountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InMemAccountService],
    }).compile();

    service = module.get<InMemAccountService>(InMemAccountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
