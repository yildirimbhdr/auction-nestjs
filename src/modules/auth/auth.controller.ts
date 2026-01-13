import { Controller, Logger, Post } from "@nestjs/common";
import { BaseController } from "src/common/base/base.controller";
import { UsersService } from "../users/users.service";
import { UsersController } from "../users/users.controller";

@Controller()
export class AuthController extends BaseController {
    protected readonly logger = new Logger(UsersController.name);
    
    constructor() {
        super();
    }

    @Post('login')
    async login() {
        return this.executeAsync(async () => {
            
        }, 'User logged in successfully');
    }

    @Post('register')
    async register() {
        return this.executeAsync(async () => {
            
        }, 'User registered successfully');
    }

}