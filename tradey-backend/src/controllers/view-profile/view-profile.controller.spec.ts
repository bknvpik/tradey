import { Test, TestingModule } from '@nestjs/testing';
import { ViewProfileController } from './view-profile.controller';

describe('ViewProfileController', () => {
  let controller: ViewProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViewProfileController],
    }).compile();

    controller = module.get<ViewProfileController>(ViewProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
