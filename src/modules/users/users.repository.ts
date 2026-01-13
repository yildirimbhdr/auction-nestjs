import { User } from "src/database/entities/User.entity";
import { Repository } from "typeorm";

export class UsersRepository extends Repository<User> {
    
}