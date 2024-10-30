import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './role.guard';
import { CONSTANTS } from './constants';

// 1 - Issue the id card jwt token
@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly appService: AppService,
  ) {}
  // constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    // authentication complete
    // next step authorize
    // id card jwt token
    const token = this.authService.generateToken(req.user);
    return token;
  }

  @Get('/web-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  webDeveloper(@Request() req): string {
    return 'Web Developer role' + JSON.stringify(req.user);
  }

  @Get('/android-developer')
  @UseGuards(AuthGuard('jwt'), new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  androidDeveloper(@Request() req): string {
    return 'Android Developer role' + JSON.stringify(req.user);
  }
}
