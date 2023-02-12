import { Test, TestingModule } from '@nestjs/testing';
import { userController } from './user.controller';

describe('UserController', () => {
  let controller: userController;

  // https://www.youtube.com/watch?v=Mgr5_r70OJQ 1:28

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
