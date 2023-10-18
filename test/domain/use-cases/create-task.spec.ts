import { CreateTask } from '@/src/domain/use-cases/create-task';
import { InMemoryTaskRepository } from '../../infra/database/in-memory/in-memory-task-repository';

let createTask: CreateTask;
let taskRepository: InMemoryTaskRepository;

describe('Task', () => {
  beforeEach(() => {
    taskRepository = new InMemoryTaskRepository();
    createTask = new CreateTask(taskRepository);
  });
  it('should be able to create a new task', async () => {
    const description = 'task-description';
    await createTask.execute({ description });

    expect(taskRepository.tasks.length).toBe(1);
  });
});
