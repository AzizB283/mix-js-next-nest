import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
export declare class AppController {
    private readonly authService;
    private readonly appService;
    constructor(authService: AuthService, appService: AppService);
    getHello(): string;
    login(req: any): string;
    webDeveloper(req: any): string;
    androidDeveloper(req: any): string;
}
