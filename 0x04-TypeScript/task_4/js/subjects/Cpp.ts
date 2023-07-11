import { Subjects as TeacherSubjects } from "./Teacher";
import { Subjects as SubjectSubjects } from "./Subject";

declare module "./Teacher" {
  interface Teacher {
    experienceTeachingJava?: number;
  }
}

export namespace Subjects {
  export class Java extends SubjectSubjects.Subject {
    getRequirements(): string {
      return "Here is the list of requirements for Java";
    }

    getAvailableTeacher(): string {
      if ( this.getTeacher == undefined) {
        return "No available teacher";
      } else {
        return `Available Teacher: ${this.getTeacher().firstName}`;
      }
    }
  }
}