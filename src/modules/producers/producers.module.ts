import { Module } from '@nestjs/common';
import { ProducersController } from './infra/http/producers.controller';
import CreateProducerService from './services/create-producer.service';
import FindAllProducersService from './services/find-all-producers.service';
import FindOneProducerService from './services/find-one-producer.service';
import DeleteProducerService from './services/delete-producer.service';
import UpdateProducerService from './services/update-producer.service';

@Module({
    controllers: [
        ProducersController
    ],
    providers: [
        FindAllProducersService,
        FindOneProducerService,
        CreateProducerService,
        UpdateProducerService,
        DeleteProducerService
    ],
    exports: []
})
export class ProducersModule {}
