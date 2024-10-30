import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class UserGuard implements CanActivate {
    key: string;
    canActivate(context: ExecutionContext): boolean;
}
