import { Subjects as Cpp, Teacher } from './Cpp'
import { Subjects as Java } from './Java'
import { Subjects as React } from './React'
import { Subjects as TeacherSubjects } from './Teacher';
import {Subjects as SubjectTeacher} from './Subject'

export const cpp = new Cpp.Cpp();
export const java = new Java.Java();
export const react = new React.React();

export const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10
};