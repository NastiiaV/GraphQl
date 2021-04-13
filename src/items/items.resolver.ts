import { Resolver, Query, Mutation, Args} from '@nestjs/graphql';;
import { ItemsService } from './items.service';
import { ItemType } from './dto/create-item.dto';
import { ItemInput } from './item.input';
import { RouteС } from './routeС.entity';
import { NotFoundException } from '@nestjs/common';

@Resolver('items')
export class ItemsResolver {
    constructor(private readonly itemsService: ItemsService) {}

  @Query(() => [ItemType])
  async items(): Promise<ItemType[]> {
    return await this.itemsService.findAll();
  }

  @Query(() => ItemType)
  async findItem(@Args('id') id: number): Promise<ItemType> {
    const item = await this.itemsService.findOne(id);
    if (!item) {
      throw new NotFoundException(id);
    }
    return item;
  }

  @Mutation(() => ItemType)
  async createItem(@Args('input') input: ItemInput): Promise<ItemInput> {
    return this.itemsService.create(input);
  }
  
  @Mutation(() => ItemType)
  async updateItem(
    @Args('id') id: number,
    @Args('input') input: ItemInput,
  ): Promise<ItemInput> {
    return this.itemsService.update(id, input);
  }

  @Mutation(() => ItemType)
  async deleteItem(@Args('id') id: number): Promise<void> {
    return await this.itemsService.delete(id);
  }

    
}
