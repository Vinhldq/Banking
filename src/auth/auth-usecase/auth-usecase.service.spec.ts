import { Test, TestingModule } from '@nestjs/testing';
import { AuthUsecaseService } from './auth-usecase.service';

describe('AuthUsecaseService', () => {
  let service: AuthUsecaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthUsecaseService],
    }).compile();

    service = module.get<AuthUsecaseService>(AuthUsecaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
