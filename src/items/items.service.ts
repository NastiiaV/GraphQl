import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemInput } from './item.input';
import { RouteС } from './routeС.entity';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(RouteС)
        private readonly routeCRepository: Repository<RouteС>) { }

    async create(createItemDto: ItemInput): Promise<RouteС> {
        const objToCreate = await this.routeCRepository.create(createItemDto);
        if (typeof (objToCreate.speciality) !== 'number') {
            throw new HttpException("400 BadRequest", 400)
        }
        else {
            return this.routeCRepository.save(createItemDto);
        }
    }

    async findAll(): Promise<RouteС[]> {
        return await this.routeCRepository.find();
    }

    async findOne(id: number): Promise<RouteС> {
        return await this.routeCRepository.findOne(id);
    }

    async delete(id: number): Promise<void> {
        await this.routeCRepository.delete(id);
    }

    async update(id: number, data: ItemInput): Promise<RouteС> {
        await this.routeCRepository.update(id, data);
        return this.routeCRepository.findOne(id);
    }
}
