import { Subjects as TeacherSubjects } from "./Teacher";

export namespace Subjects {
  export class Subject {
    private _teacher: TeacherSubjects.Teacher;

    setTeacher(teacher: TeacherSubjects.Teacher): void {
      this._teacher = teacher;
    }
    getTeacher(): TeacherSubjects.Teacher {
      return this._teacher;
    }
  }
}