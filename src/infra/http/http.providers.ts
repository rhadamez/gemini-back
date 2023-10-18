import { TaskRepository } from '@/domain/contracts/task-repository';
import { CreateTask } from '@/domain/use-cases/create-task';
import { DeleteTask } from '@/domain/use-cases/delete-task';
import { ListTasks } from '@/domain/use-cases/list-tasks';
import { UpdateTask } from '@/domain/use-cases/update-task';

export const createTaskProvider = {
  provide: CreateTask,
  useFactory: (taskRepository: TaskRepository) => {
    return new CreateTask(taskRepository);
  },
  inject: [TaskRepository],
};

export const listTaskProvider = {
  provide: ListTasks,
  useFactory: (taskRepository: TaskRepository) => {
    return new ListTasks(taskRepository);
  },
  inject: [TaskRepository],
};

export const updateTaskProvider = {
  provide: UpdateTask,
  useFactory: (taskRepository: TaskRepository) => {
    return new UpdateTask(taskRepository);
  },
  inject: [TaskRepository],
};

export const deleteTaskProvider = {
  provide: DeleteTask,
  useFactory: (taskRepository: TaskRepository) => {
    return new DeleteTask(taskRepository);
  },
  inject: [TaskRepository],
};
