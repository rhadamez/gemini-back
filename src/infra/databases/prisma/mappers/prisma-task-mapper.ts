import { Task } from '@/src/domain/entities/Task';
import { Task as PrismaTask } from '@prisma/client';

export class PrismaTaskMapper {
  static toDomain(prismaTask: PrismaTask): Task {
    return new Task({
      id: prismaTask.id,
      description: prismaTask.description,
      done: prismaTask.done,
      createdAt: prismaTask.createdAt,
      updatedAt: prismaTask.updatedAt ?? null,
    });
  }

  static toRaw(task: Task): PrismaTask {
    return {
      id: task.id!,
      description: task.description,
      done: task.done,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt ?? null,
    } as PrismaTask;
  }
}
