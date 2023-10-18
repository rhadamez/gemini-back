import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { TaskRepository } from '@/src/domain/contracts/task-repository';
import { PrismaTaskRepository } from './prisma/repositories/prisma-task-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: TaskRepository,
      useClass: PrismaTaskRepository,
    },
  ],
  exports: [PrismaService, TaskRepository],
})
export class DatabaseModule {}
