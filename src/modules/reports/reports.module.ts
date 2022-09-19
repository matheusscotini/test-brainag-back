import { Module } from '@nestjs/common';
import { ReportsController } from './infra/http/reports.controller';
import GetTotalArableAreaService from './services/total-arable-area.service';
import GetTotalFarmsByStateService from './services/total-farms-state.service';
import GetTotalFarmsService from './services/total-farms.service';
import GetTotalHectaresService from './services/total-hectares.service';
import GetTotalTypeAreaService from './services/total-type-area.service';

@Module({
    controllers: [ReportsController],
    providers: [
        GetTotalFarmsService,
        GetTotalHectaresService,
        GetTotalArableAreaService,
        GetTotalFarmsByStateService,
        GetTotalTypeAreaService
    ]
})
export class ReportsModule {}
