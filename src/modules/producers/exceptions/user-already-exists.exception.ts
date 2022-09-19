import { NotFoundException } from '@nestjs/common';

class UserAlreadyExistsException extends NotFoundException {
    public constructor() {
        super(`CPF existente.`);
    }
}

export default UserAlreadyExistsException;
