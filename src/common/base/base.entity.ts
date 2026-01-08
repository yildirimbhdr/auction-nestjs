import { CreateDateColumn, DeleteDateColumn,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;


    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    public createdAt: Date;

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    public updatedAt: Date;

    @DeleteDateColumn({
        nullable: true,
    })
    public deletedAt: Date;
}