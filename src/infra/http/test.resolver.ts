import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Task as PrismaTask } from '@prisma/client';
import { Task } from './graphql/models/task';
import { CreateTaskInput } from './graphql/inputs/create-task-input';
import { UpdateTaskInput } from './graphql/inputs/update-task-input';
import { DeleteTaskInput } from './graphql/inputs/delete-task-input';
import { CreateTask } from '@/src/domain/use-cases/create-task';
import { ListTasks } from '@/src/domain/use-cases/list-tasks';
import { UpdateTask } from '@/src/domain/use-cases/update-task';
import { DeleteTask } from '@/src/domain/use-cases/delete-task';

@Resolver()
export class TestResolver {
  constructor(
    private createTask: CreateTask,
    private listTask: ListTasks,
    private updateTask: UpdateTask,
    private deleteTask: DeleteTask,
  ) {}

  @Query(() => [Task])
  async list(): Promise<PrismaTask[]> {
    return await this.listTask.execute();
  }

  @Mutation(() => Task)
  async create(@Args('data') data: CreateTaskInput): Promise<Task> {
    return await this.createTask.execute({ description: data.description });
  }

  @Mutation(() => Task)
  async update(@Args('data') data: UpdateTaskInput): Promise<PrismaTask> {
    const task = await this.updateTask.execute(data);
    return task;
  }

  @Mutation(() => String)
  async delete(@Args('data') data: DeleteTaskInput): Promise<string> {
    await this.deleteTask.execute({ taskId: data.id });
    return 'Task deleted successfully!';
  }
}
