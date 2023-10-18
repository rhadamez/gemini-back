import { CreateTask } from '@/src/domain/use-cases/create-task';
import { InMemoryTaskRepository } from '../../infra/database/in-memory/in-memory-task-repository';
import { UpdateTask } from '@/src/domain/use-cases/update-task';

let createTask: CreateTask;
let updateTask: UpdateTask;
let taskRepository: InMemoryTaskRepository;

describe('Update Task', () => {
  beforeEach(() => {
    taskRepository = new InMemoryTaskRepository();
    createTask = new CreateTask(taskRepository);
    updateTask = new UpdateTask(taskRepository);
  });
  it('should be able to update a task', async () => {
    const description = 'task-description';
    const oldTask = await createTask.execute({ description });

    const updatedTask = await updateTask.execute({
      id: oldTask.id,
      description: 'new-description',
    });

    expect(updatedTask.description).toBe('new-description');
  });
});
