interface Teacher {
    firstName: string;
    lasttName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number;
}

// Define the function interface
interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }

//func
const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    const firstInitial = firstName.charAt(0);
    return `${firstInitial}. ${lastName}`

};

// Define the class interface
interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements StudentInterface {
    constructor(public firstName: string, public lastName: string) {}
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
