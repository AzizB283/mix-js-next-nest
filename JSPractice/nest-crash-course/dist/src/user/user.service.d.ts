import { CreateUserDto } from './dto/createUserDto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/updateUserDto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findOne(id: number): Promise<User>;
    getUserByName(name: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
