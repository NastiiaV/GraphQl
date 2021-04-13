import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class ItemType {
  @Field(() => ID)
  id?: number;

  @Field()
  type: string;

  @Field(() => Int)
  speciality: number;
}