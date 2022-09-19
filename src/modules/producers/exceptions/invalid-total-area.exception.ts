import { NotFoundException } from '@nestjs/common';

class InvalidTotalAreaException extends NotFoundException {
    public constructor() {
        super(`A soma da área agrícultavel e da área de vegetação não pode ser maior que a área total`);
    }
}

export default InvalidTotalAreaException;
