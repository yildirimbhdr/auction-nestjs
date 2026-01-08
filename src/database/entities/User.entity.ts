import { BaseEntity } from "src/common/base/base.entity";
import { Column, Entity } from "typeorm";

@Entity('users')
export class User extends BaseEntity {
    @Column({ unique: true, length: 100, nullable: false })
    email: string;

    @Column({ length: 100, nullable: false })
    password: string;

    @Column({ length: 50, nullable: false })
    firstName: string;

    @Column({ length: 50, nullable: false })
    lastName: string;
}