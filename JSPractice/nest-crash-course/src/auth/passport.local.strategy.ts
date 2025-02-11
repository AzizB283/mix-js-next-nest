import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super();
  }

  async validate(name: string, password: string): Promise<User> {
    const user = this.userService.getUserByName(name);
    if (user === undefined) throw new UnauthorizedException();

    if ((await user).password === password) return user;
  }
}
