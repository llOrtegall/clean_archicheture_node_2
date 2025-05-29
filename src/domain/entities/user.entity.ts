export interface UserEntity {
    uuid: string;
    names: string;
    lastNames: string;
    email: string;
    phone: string;
    password: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}