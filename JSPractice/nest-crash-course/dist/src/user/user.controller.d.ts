import { CreateUserDto } from './dto/createUserDto';
import { UserService } from './user.service';
import { CommentService } from 'src/comment/comment.service';
import { UpdateUserDto } from './dto/updateUserDto';
export declare class UserController {
    private readonly userService;
    private readonly commentService;
    constructor(userService: UserService, commentService: CommentService);
    findAll(): Promise<import("./entities/user.entity").User[]>;
    findOne(id: number): Promise<import("./entities/user.entity").User>;
    getUserByName(name: string): Promise<import("./entities/user.entity").User>;
    createUser(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    getUserComment(id: string): string;
    updateUser(id: number, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
