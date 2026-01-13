import { Inject } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { RegisterRequestDTO } from "./dto/request/register-request.dto";

export class AuthService {

    constructor(@Inject(UsersService) private readonly usersService: UsersService) {}
    async registerUser(body: RegisterRequestDTO) {
        return await this.usersService.createUser(body);
    }
}