import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { CreateUserDTO } from "./dto/service/create-user.dto";

@Injectable()
export class UsersService{
    constructor(private readonly usersRepository: UsersRepository) {}

    async createUser(data: CreateUserDTO) {
        const user = this.usersRepository.create(data);
        return await this.usersRepository.save(user);
    }
}