import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { RouteС } from './items/routeС.entity';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
   }),
   TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pgadmin2021',         
    database: 'routesdb',
    entities:[RouteС],
    autoLoadEntities: true,
    synchronize: true,
  }),
   ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
