
# Chapter II: Java Building Blocks

## Learning Objectives
- Declare variables and recognize when they are uninitialized or undefined.
- Differentiate between object reference variables and primitive variables.
- Read or write to object fields.
- Call methods on objects.
- Identify when an object is eligible for garbage collection.
- Explain an object’s lifecycle (creation, dereference, and garbage collection).

## Declaring Variables
A variable is a container that holds data that can be changed during the execution of a program. Variables have types, which tell the compiler and runtime what kind of data they can store. In Java, variables must be declared before they can be used.

```java
int number;
```

In this line of code, `int` is the type of the variable, and `number` is the name of the variable.

### Initializing Variables
A variable declaration can include an initial value, which sets the variable to a specified value at the time it is created.

```java
int number = 10;
```

If you try to use a variable before it has been initialized, the compiler will give an error.

### Variable Types
Java has two categories of data types: primitive types and reference types.

#### Primitive Types
Primitive types are the most basic data types available in Java. They include:
- `byte`
- `short`
- `int`
- `long`
- `float`
- `double`
- `char`
- `boolean`

#### Reference Types
Reference types are used to refer to objects. They are created using defined classes and interfaces.

```java
String text = "Hello, world!";
```

In this example, `String` is a reference type, and `text` is a variable that holds a reference to a `String` object.

## Object Lifecycle
### Object Creation
Objects in Java are created using the `new` keyword.

```java
MyClass obj = new MyClass();
```

### Dereferencing
An object is dereferenced when there are no more references to it. This can be done by assigning `null` to a reference.

```java
obj = null;
```

### Garbage Collection
When an object is no longer referenced, it becomes eligible for garbage collection. The Java runtime environment includes a garbage collector that automatically reclaims memory used by objects that are no longer accessible.

```java
System.gc();
```

This method suggests that the Java Virtual Machine (JVM) performs garbage collection, although it is not guaranteed to do so immediately.
