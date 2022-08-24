import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasksStatus.enum';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
