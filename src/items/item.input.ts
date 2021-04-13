import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class ItemInput {
  @Field()
  type: string;

  @Field(() => Int)
  speciality: number;
}