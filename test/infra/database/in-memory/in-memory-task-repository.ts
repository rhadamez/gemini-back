import { TaskRepository } from '@/src/domain/contracts/task-repository';
import { Task } from '@/src/domain/entities/Task';

export class InMemoryTaskRepository implements TaskRepository {
  tasks: Task[] = [];

  async create(task: Task): Promise<Task> {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);

    return task;
  }

  async list(): Promise<Task[]> {
    return this.tasks;
  }

  async findById(id: number): Promise<Task | null> {
    const taskExists = this.tasks.find((item) => item.id === id);
    if (!taskExists) return null;

    return taskExists;
  }

  async update(task: Task): Promise<Task> {
    const taskIndex = this.tasks.findIndex((item) => item.id === task.id);
    this.tasks[taskIndex] = task;

    return task;
  }

  async delete(id: number): Promise<void> {
    const taskIndex = this.tasks.findIndex((item) => item.id === id);
    this.tasks.splice(taskIndex, 1);
  }
}
