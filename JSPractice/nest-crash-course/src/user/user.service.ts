import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateUserDto } from './dto/updateUserDto';

@Injectable()
export class UserService {
  // Inject user repository
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  findOne(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }

  getUserByName(name: string) {
    return this.userRepository.findOneBy({ name: name });
  }

  create(createUserDto: CreateUserDto): Promise<User> {
    let user: User = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.age = createUserDto.age;
    user.password = createUserDto.password;

    return this.userRepository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    let user: User = new User();
    user.name = updateUserDto.name;
    user.email = updateUserDto.email;
    user.age = updateUserDto.age;
    user.password = updateUserDto.password;
    user.id = id;

    return this.userRepository.save(user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
