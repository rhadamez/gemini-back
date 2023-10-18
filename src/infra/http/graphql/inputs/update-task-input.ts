import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput {
  @Field()
  id: number;

  @Field()
  description?: string;

  @Field()
  done?: boolean;
}
