import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  getUser() {
    return { name: 'M Babar Waseem', email: 'mbabarwaseem@gmail.com' };
  }
  create(req: Request) {
    return req.body;
  }
  update(req: Request, param: { userId: number }) {
    return { body: req.body, param };
  }
  getUserById(param: { userId: number }) {
    return param;
  }
  delete(param: { userId: number }) {
    return param;
  }
}
