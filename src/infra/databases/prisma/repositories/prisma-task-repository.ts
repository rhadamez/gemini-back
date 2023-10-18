import { TaskRepository } from '@/src/domain/contracts/task-repository';
import { Task } from '@/src/domain/entities/Task';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { PrismaTaskMapper } from '../mappers/prisma-task-mapper';

@Injectable()
export class PrismaTaskRepository implements TaskRepository {
  constructor(private prismaService: PrismaService) {}

  async create(task: Task): Promise<Task> {
    const prismaTask = await this.prismaService.task.create({
      data: {
        description: task.description,
      },
    });

    return PrismaTaskMapper.toDomain(prismaTask);
  }

  async list(): Promise<Task[]> {
    const tasks = await this.prismaService.task.findMany();

    return tasks.map(PrismaTaskMapper.toDomain);
  }

  async findById(id: number): Promise<Task | null> {
    const task = await this.prismaService.task.findUnique({
      where: {
        id,
      },
    });

    if (!task) return null;

    return PrismaTaskMapper.toDomain(task);
  }

  async update(task: Task): Promise<Task> {
    const prismaTask = await this.prismaService.task.update({
      where: {
        id: task.id,
      },
      data: task,
    });

    return PrismaTaskMapper.toDomain(prismaTask);
  }

  async delete(id: number): Promise<void> {
    await this.prismaService.task.delete({
      where: {
        id,
      },
    });
  }
}
