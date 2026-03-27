//////////////////////////////
// Single Responsibility (SRP)
//////////////////////////////

class Course {
  constructor(title) {
    this.title = title;
  }
}

class Student {
  constructor(name) {
    this.name = name;
  }
}

class EnrollmentService {
  enroll(student, course) {
    console.log(`${student.name} enrolled in ${course.title}`);
  }
}

//////////////////////////////
// Open/Closed (OCP)
//////////////////////////////

class Quiz {
  evaluate() {
    throw new Error("Must be implemented");
  }
}

class MCQQuiz extends Quiz {
  evaluate() {
    return "Evaluating MCQ Quiz";
  }
}

class TrueFalseQuiz extends Quiz {
  evaluate() {
    return "Evaluating True/False Quiz";
  }
}

//////////////////////////////
// Liskov Substitution (LSP)
//////////////////////////////

function processQuiz(quiz) {
  console.log(quiz.evaluate());
}

//////////////////////////////
// Interface Segregation (ISP)
//////////////////////////////

class QuizTaker {
  takeQuiz() {
    console.log("Taking quiz...");
  }
}

class CertificateViewer {
  viewCertificate() {
    console.log("Viewing certificate...");
  }
}

class StudentUser extends QuizTaker {
  constructor(name) {
    super();
    this.name = name;
  }

  takeQuiz() {
    console.log(`${this.name} is taking a quiz`);
  }
}

//////////////////////////////
// Dependency Inversion (DIP)
//////////////////////////////

class NotificationService {
  send(message) {
    throw new Error("Must be implemented");
  }
}

class EmailService extends NotificationService {
  send(message) {
    console.log("Email:", message);
  }
}

class SMSService extends NotificationService {
  send(message) {
    console.log("SMS:", message);
  }
}

class CourseManager {
  constructor(notificationService) {
    this.notificationService = notificationService;
  }

  enrollStudent(student, course) {
    console.log(`${student.name} enrolled in ${course.title}`);
    this.notificationService.send("Enrollment successful");
  }
}

//////////////////////////////
// Example Usage
//////////////////////////////

const course = new Course("OOP");
const student = new Student("Heba");

const enrollmentService = new EnrollmentService();
enrollmentService.enroll(student, course);

const mcq = new MCQQuiz();
const tf = new TrueFalseQuiz();

processQuiz(mcq);
processQuiz(tf);

const studentUser = new StudentUser("Ahmed");
studentUser.takeQuiz();

const email = new EmailService();
const sms = new SMSService();

const manager1 = new CourseManager(email);
manager1.enrollStudent(student, course);

const manager2 = new CourseManager(sms);
manager2.enrollStudent(student, course);
