### Chapter 7: Beyond Classes

#### Key Topics Covered

1. **Top-Level Types**
  - Interfaces
  - Enums
  - Sealed Classes
  - Records

2. **Encapsulation**
  - Proper protection of instance members.

3. **Nested Types**
  - Understanding and utilizing nested classes.

4. **Polymorphism**
  - Implementing and differentiating object types versus reference types.
  - Performing type casting.
  - Identifying object types using the `instanceof` operator and pattern matching.

#### Detailed Breakdown

**Top-Level Types**
- **Interfaces**: Defines a contract that implementing classes must fulfill. Interfaces can contain default methods, static methods, and private methods.
- **Enums**: Used to define a fixed set of constants. Enums can have fields, methods, and constructors.
- **Sealed Classes**: Restricts which classes can extend or implement them, providing more control over the inheritance hierarchy.
- **Records**: A special kind of class in Java that is designed to be a simple data carrier.

**Encapsulation**
- Encapsulation is a fundamental concept in object-oriented programming that restricts access to certain components of an object. This ensures that the internal representation of the object is hidden from the outside, only allowing access through a controlled interface.

**Nested Types**
- Nested types are types declared within another type. Java supports several kinds of nested types:
  - **Static Nested Classes**: Nested classes that do not have access to the instance variables of the outer class.
  - **Inner Classes**: Nested classes that have access to the instance variables of the outer class.
  - **Local Classes**: Classes declared within a method.
  - **Anonymous Classes**: Classes declared without a class name.

**Polymorphism**
- Polymorphism allows objects to be treated as instances of their parent class rather than their actual class. This is a key feature in Java, enabling flexibility and the use of generic types.

**Implementing Polymorphism**
- Differentiate between object type and reference type.
- Perform type casting to convert one type to another.
- Identify object types using the `instanceof` operator and pattern matching.

#### Example: Using an Interface
```java
interface Animal {
    void sound();
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Woof");
    }
}

public class TestInterface {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.sound();  // Output: Woof
    }
}
```

#### Example: Using an Enum
```java
enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

public class TestEnum {
    public static void main(String[] args) {
        Day today = Day.WEDNESDAY;
        System.out.println("Today is " + today);
    }
}
```

#### Example: Using a Record
```java
record Person(String name, int age) {}

public class TestRecord {
    public static void main(String[] args) {
        Person p = new Person("Alice", 30);
        System.out.println(p.name() + " is " + p.age() + " years old.");
    }
}
```

These concepts and examples from Chapter 7 cover important aspects of Java beyond the basic class structure, delving into more advanced and nuanced features of the language.

For more detailed information and further examples, refer to the OCP Oracle Certified Professional Java SE 17 Developer Study Guide【28:0†source】【28:1†source】【28:2†source】.
