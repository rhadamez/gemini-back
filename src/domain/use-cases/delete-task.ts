import { TaskRepository } from '../contracts/task-repository';
import { TaskNotFound } from '../entities/errors/task-not-found';

interface Input {
  taskId: number;
}

export class DeleteTask {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ taskId }: Input): Promise<void> {
    const taskExists = await this.taskRepository.findById(taskId);

    if (!taskExists) throw new TaskNotFound();

    await this.taskRepository.delete(taskId);
  }
}
