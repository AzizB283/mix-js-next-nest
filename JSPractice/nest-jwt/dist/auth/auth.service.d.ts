import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateToken(payload: User): string;
}
