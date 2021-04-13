import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import {RouteС} from './routeС.entity';

@Module({
  imports:[TypeOrmModule.forFeature([RouteС])],
  providers: [ItemsService, ItemsResolver]
})
export class ItemsModule {}
