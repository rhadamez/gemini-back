import { Task } from '@/domain/entities/Task';
import { TaskRepository } from '../contracts/task-repository';

export class ListTasks {
  constructor(private taskRepository: TaskRepository) {}

  async execute(): Promise<Task[]> {}
}
