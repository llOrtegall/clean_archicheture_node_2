import type { UserEntity } from "domain/entities/user.entity";

export class UserValue implements UserEntity {
    uuid: string;
    names: string;
    lastNames: string;
    email: string;
    phone: string;
    password: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(private params: UserEntity) { }


    static create(params: UserEntity): UserValue {
        return new UserValue(params);
    }
}