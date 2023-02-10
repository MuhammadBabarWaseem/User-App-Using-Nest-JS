import { userModule } from './User/user.module';
import { userController } from './User/user.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  controllers: [AppController, userController],
  imports: [userModule],
})
export class AppModule {}
