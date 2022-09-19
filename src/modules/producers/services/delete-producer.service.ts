import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Prisma, Producer } from "@prisma/client";
import { PrismaService } from "src/modules/prisma/services/prisma.service";

@Injectable()
export default class DeleteProducerService{
    public constructor(private prismaService: PrismaService) {}

    public async execute(params: Prisma.ProducerWhereUniqueInput): Promise<Producer> {
        try{
            const data: any = {
                deleted_at: new Date()
            };

            const where: any = {
                id: +params.id
            };

            return await this.prismaService.producer.update({data, where});
        } catch (error) {
            throw new HttpException(
                'Erro ao deletar produtor.',
                HttpStatus.NOT_FOUND,
            );
        }
    }
}
