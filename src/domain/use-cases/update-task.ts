import { Task } from '@/domain/entities/Task';
import { TaskRepository } from '../contracts/task-repository';

interface Input {
  id: number;
  description?: string;
  done?: boolean;
}

export class UpdateTask {
  constructor(private taskRepository: TaskRepository) {}

  async execute({ id, description, done }: Input): Promise<Task> {}
}
