import { join } from 'node:path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TestResolver } from './test.resolver';
import { ApolloDriver } from '@nestjs/apollo';
import {
  createTaskProvider,
  deleteTaskProvider,
  listTaskProvider,
  updateTaskProvider,
} from './http.providers';
import { DatabaseModule } from '../databases/database.module';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    TestResolver,
    createTaskProvider,
    listTaskProvider,
    updateTaskProvider,
    deleteTaskProvider,
  ],
})
export class HttpModule {}
