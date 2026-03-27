# SOLID Principles - JS OOP Mini Design

## 📌 Overview

This project demonstrates the 5 SOLID principles using a simple Smart Learning Platform example.

---

## 🟢 1. Single Responsibility Principle (SRP)

**Definition:**  
A class should have only one responsibility.

**Applied in:**

- Course → stores course data
- Student → stores student data
- EnrollmentService → handles enrollment logic

**Why it matters:**

- Easier to maintain
- Each class is focused on one task

---

## 🔵 2. Open/Closed Principle (OCP)

**Definition:**  
Classes should be open for extension but closed for modification.

**Applied in:**

- Quiz (base class)
- MCQQuiz and TrueFalseQuiz extend it

**Why it matters:**

- We can add new quiz types without changing existing code

---

## 🟡 3. Liskov Substitution Principle (LSP)

**Definition:**  
Child classes should be replaceable with their parent class.

**Applied in:**

- processQuiz() works with any type of Quiz

**Why it matters:**

- Ensures system behaves correctly when using subclasses

---

## 🟠 4. Interface Segregation Principle (ISP)

**Definition:**  
Classes should not be forced to implement methods they don’t use.

**Applied in:**

- QuizTaker → only quiz-related methods
- CertificateViewer → only certificate-related methods

**Why it matters:**

- Avoids unnecessary dependencies

---

## 🔴 5. Dependency Inversion Principle (DIP)

**Definition:**  
Depend on abstractions, not concrete implementations.

**Applied in:**

- CourseManager depends on NotificationService (not Email/SMS directly)

**Why it matters:**

- Easy to switch between Email and SMS
- Improves flexibility and testability

---

## 🚀 Benefits of SOLID

- Better scalability
- Easier maintenance
- Improved testability
- Cleaner and more readable code

---

## 👩‍💻 Author

Heba Asker
