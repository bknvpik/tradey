import { Test, TestingModule } from '@nestjs/testing';
import { MakeOfferController } from './make-offer.controller';

describe('MakeOfferController', () => {
  let controller: MakeOfferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MakeOfferController],
    }).compile();

    controller = module.get<MakeOfferController>(MakeOfferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
