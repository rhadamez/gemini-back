import { Task } from '../entities/Task';

export abstract class TaskRepository {
  abstract create(task: Task): Promise<Task>;
  abstract list(): Promise<Task[]>;
  abstract findById(id: number): Promise<Task | null>;
  abstract update(task: Task): Promise<Task>;
  abstract delete(id: number): Promise<void>;
}
