import { TaskRepository } from '@/domain/contracts/task-repository';
import { CreateTask } from '@/domain/use-cases/create-task';

export const createTaskProvider = {
  provide: CreateTask,
  useFactory: (taskRepository: TaskRepository) => {
    return new CreateTask(taskRepository);
  },
  inject: [TaskRepository],
};
