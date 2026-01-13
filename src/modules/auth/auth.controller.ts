import { Body, Controller, Logger, Post } from "@nestjs/common";
import { BaseController } from "src/common/base/base.controller";
import { UsersService } from "../users/users.service";
import { UsersController } from "../users/users.controller";
import { AuthService } from "./auth.service";
import { RegisterRequestDTO } from "./dto/request/register-request.dto";

@Controller('auth')
export class AuthController extends BaseController {
    protected readonly logger = new Logger(UsersController.name);
    
    constructor(private readonly authService: AuthService) {
        super();
    }

    @Post('login')
    async login() {
        return this.executeAsync(async () => {
            
        }, 'User logged in successfully');
    }

    @Post('register')
    async register(@Body() body: RegisterRequestDTO) {
        return this.executeAsync(async () => {
            return await this.authService.registerUser(body);
        }, 'User registered successfully');
    }

}