import { Repository, EntityRepository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/createTask.dto';
import { TaskStatus } from './tasksStatus.enum';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  async createTask(CreateTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = CreateTaskDto;
    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
    });

    await this.save(task);
    return task;
  }
}
