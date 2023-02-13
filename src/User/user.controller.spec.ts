import { Test, TestingModule } from '@nestjs/testing';
import { userController } from './user.controller';

describe('UserController', () => {
  let controller: userController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [userController],
    }).compile();

    controller = module.get<userController>(userController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
