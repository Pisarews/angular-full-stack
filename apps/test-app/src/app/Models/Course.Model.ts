import { Instructor } from './Instructor.Model';

export class Course{
  id: number;
  name: string;
  images: string[];
  status: string;
  instructors: Instructor[];
}
