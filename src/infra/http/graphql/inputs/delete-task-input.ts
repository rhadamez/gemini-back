import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteTaskInput {
  @Field()
  id: number;
}
