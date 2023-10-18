import { Task } from '@/src/domain/entities/Task';
import { TaskRepository } from '../contracts/task-repository';

export class ListTasks {
  constructor(private taskRepository: TaskRepository) {}

  async execute(): Promise<Task[]> {
    return await this.taskRepository.list();
  }
}
