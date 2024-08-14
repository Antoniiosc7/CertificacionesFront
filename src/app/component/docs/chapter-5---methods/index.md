### Chapter 5: Methods

#### OCP EXAM OBJECTIVES COVERED IN THIS CHAPTER:
- Utilizing Java Object-Oriented Approach
  - Create classes and records, and define and use instance and static fields and methods, constructors, and instance and static initializers.
  - Implement overloading, including var-arg methods.

#### Introduction

In previous chapters, you learned how to write snippets of code without much thought about the methods that contained the code. In this chapter, you explore methods in depth including modifiers, arguments, varargs, overloading, and autoboxing. Many of these fundamentals, such as access and static modifiers, are applicable to classes and other types throughout the rest of the book. If you’re having difficulty, you might want to read this chapter twice!

---

### 5.1: Method Structure

#### Components of a Method
- **Access Modifiers**: Define the visibility of the method (e.g., public, private).
- **Return Type**: The data type of the value the method returns.
- **Method Name**: The name used to call the method.
- **Parameters**: The inputs to the method.
- **Method Body**: The code that defines the functionality of the method.

```java
public int add(int a, int b) {
    return a + b;
}
```

### 5.2: Method Modifiers

#### Access Modifiers
- **public**: The method is accessible from any other class.
- **protected**: The method is accessible within its own package and by subclasses.
- **default**: (no modifier) The method is accessible only within its own package.
- **private**: The method is accessible only within its own class.

#### Non-Access Modifiers
- **static**: Belongs to the class rather than an instance of the class.
- **final**: Cannot be overridden by subclasses.
- **abstract**: Has no body and must be implemented by subclasses.

### 5.3: Passing Data to Methods

#### Parameters and Arguments
- **Primitive Parameters**: Passed by value.
- **Reference Parameters**: Passed by reference.

#### Varargs
- Varargs (variable-length argument lists) allow you to pass an arbitrary number of values to a method.
- Syntax: `public void methodName(DataType... variableName)`

```java
public static void printNumbers(int... numbers) {
    for (int number : numbers) {
        System.out.print(number + " ");
    }
}
```

### 5.4: Method Overloading

#### Definition
- Method overloading allows a class to have more than one method with the same name, as long as their parameter lists are different.

#### Rules
- Methods must differ in the number of parameters or the type of parameters.
- Changing the return type alone does not overload a method.

```java
public void display(int a) {
    System.out.println(a);
}

public void display(String a) {
    System.out.println(a);
}
```

### 5.5: Autoboxing and Unboxing

#### Autoboxing
- Automatically converting a primitive type to its corresponding wrapper class.

#### Unboxing
- Automatically converting a wrapper class to its corresponding primitive type.

```java
Integer a = 10; // Autoboxing
int b = a;      // Unboxing
```

### 5.6: Recursion

#### Definition
- A method calling itself.

#### Base Case
- Essential to avoid infinite recursion.

```java
public int factorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
```

### Review Questions

1. Which of the following access modifiers allows a method to be accessed from any other class?
  - A. public
  - B. protected
  - C. default
  - D. private

2. What is the output of the following code?
   ```java
   public static void main(String[] args) {
       System.out.println(sum(2, 3));
       System.out.println(sum(2, 3, 4));
   }

   public static int sum(int a, int b) {
       return a + b;
   }

   public static int sum(int a, int b, int c) {
       return a + b + c;
   }
   ```
  - A. 5 7
  - B. 5 9
  - C. 7 9
  - D. Compilation error

### Summary

- Methods are a core part of Java and are used to perform operations.
- Understanding method structure, overloading, and recursion is crucial for Java development.
- Access and non-access modifiers define how methods can be used and inherited.
- Autoboxing and unboxing simplify the use of primitives and their wrapper classes.

### Exam Essentials

- Be able to define and use various method components.
- Understand method overloading and the rules that apply.
- Recognize and use autoboxing and unboxing effectively.
- Write recursive methods with correct base cases.

For detailed explanations and more examples, refer to Chapter 5 in the OCP Oracle Certified Professional Java SE 17 Developer Study Guide.

---
