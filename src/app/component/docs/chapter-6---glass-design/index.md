## Chapter 6: Class Design

### OCP Exam Objectives Covered in This Chapter:

- **Utilizing Java Object-Oriented Approach**
  - Declare and instantiate Java objects including nested class objects, and explain the object life cycle including creation, reassigning references, and garbage collection.
  - Create classes and records, and define and use instance and static fields and methods, constructors, and instance and static initializers.
  - Understand variable scopes, use local variable type inference, apply encapsulation, and make objects immutable.
  - Implement polymorphism and differentiate object type versus reference type. Perform type casting, identify object types using `instanceof` operator and pattern matching.
  - Create and use interfaces, identify functional interfaces, and utilize private, static, and default interface methods.
  - Create and use enumerations with fields, methods, and constructors.

### Topics Covered:

#### 1. Declaring Classes
- **Class Structure**: Understanding the components that make up a class, such as fields, methods, and constructors.
- **Modifiers**: Using access modifiers like `public`, `private`, and `protected` as well as non-access modifiers like `final`, `abstract`, and `static`.

#### 2. Initializing Classes
- **Constructors**: Defining constructors, constructor overloading, and chaining constructors using `this()` and `super()`.
- **Instance and Static Initializers**: Utilizing instance initializers (blocks of code inside a class) and static initializers (blocks of code prefixed with `static`).

#### 3. Inheritance
- **Extending Classes**: Understanding how to extend a class using `extends` keyword and method overriding.
- **Abstract Classes and Methods**: Creating abstract classes and methods that must be implemented by subclasses.
- **Polymorphism**: Leveraging polymorphism to allow a single action to behave differently based on the actual object type.

#### 4. Object Lifecycle
- **Object Creation and Garbage Collection**: Discussing how objects are created and the process of garbage collection in Java.

#### 5. Overloading Methods
- **Method Overloading**: Defining multiple methods with the same name but different parameters.

### Example Questions

#### Question 1:
What is printed by the following program?

```java
class Antelope {
   public Antelope(int p) {
      System.out.print("4");
   }
   { System.out.print("2"); }
   static { System.out.print("1"); }
}

public class Gazelle extends Antelope {
   public Gazelle(int p) {
      super(6);
      System.out.print("3");
   }

   public static void main(String hopping[]) {
      new Gazelle(0);
   }
   static { System.out.print("8"); }
   { System.out.print("9"); }
}
```

**Options:**
A. 182640  
B. 182943  
C. 182493  
D. 421389  
E. The code does not compile.  
F. The output cannot be determined until runtime.

**Answer:**
B. 182943

#### Question 2:
Which of the following are true about a concrete class? (Choose all that apply.)

A. A concrete class can be declared as abstract.  
B. A concrete class must implement all inherited abstract methods.  
C. A concrete class can be marked as final.  
D. A concrete class must be immutable.  
E. A concrete method that implements an abstract method must match the method declaration of the abstract method exactly.

**Answer:**
B. A concrete class must implement all inherited abstract methods.  
C. A concrete class can be marked as final.  
E. A concrete method that implements an abstract method must match the method declaration of the abstract method exactly.

#### Question 3:
What is the output of the following code?

```java
public abstract class Whale {
   public abstract void dive();
   public static void main(String[] args) {
      Whale whale = new Orca();
      whale.dive(3);
   }
}

class Orca extends Whale {
   static public int MAX = 3;
   public void dive() {
      System.out.println("Orca diving");
   }
   public void dive(int... depth) {
      System.out.println("Orca diving deeper " + MAX);
   }
}
```

**Options:**
A. Orca diving  
B. Orca diving deeper 3  
C. The code will not compile because of line 4.  
D. The code will not compile because of line 8.  
E. The code will not compile because of line 11.  
F. The code will not compile because of line 12.  
G. The code will not compile because of line 17.  
H. None of the above

**Answer:**
D. The code will not compile because of line 8.

---

This overview and sample questions should help you understand the key concepts and prepare effectively for the OCP Java SE 17 Developer exam【24:1†source】【24:3†source】【24:4†source】.
