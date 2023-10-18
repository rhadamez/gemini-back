import { Task } from '@/domain/entities/Task';
import { TaskRepository } from '../contracts/task-repository';
import { TaskNotFound } from '../entities/errors/task-not-found';

interface Input {
  id: number;
  description?: string;
  done?: boolean;
}

export class UpdateTask {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ id, description, done }: Input): Promise<Task> {
    const taskExists = await this.taskRepository.findById(id);

    if (!taskExists) throw new TaskNotFound();

    if (description) taskExists.description = description;
    if (done) taskExists.done = done;

    const taskCreated = await this.taskRepository.update(taskExists);

    return taskCreated;
  }
}
