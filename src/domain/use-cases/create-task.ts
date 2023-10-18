import { Task } from '@/domain/entities/Task';
import { TaskRepository } from '../contracts/task-repository';

interface Input {
  description: string;
}

export class CreateTask {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ description }: Input): Promise<Task> {
    const task = Task.create(description);

    const taskCreated = await this.taskRepository.create(task);

    return taskCreated;
  }
}
