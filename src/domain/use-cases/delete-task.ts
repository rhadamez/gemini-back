import { TaskRepository } from '../contracts/task-repository';

interface Input {
  taskId: number;
}

export class DeleteTask {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ taskId }: Input): Promise<void> {}
}
