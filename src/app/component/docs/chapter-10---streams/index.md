### Exam Objective: Using Java I/O API

#### Key Topics Covered:
1. **Reading and Writing Files**: This includes basic file operations like reading from and writing to files using I/O streams, enhancing file handling with `newBufferedReader()` and `newBufferedWriter()`, and common read and write methods.
2. **Serializing Data**: Understanding how to serialize and deserialize Java objects, applying the `Serializable` interface, marking data as `transient`, and storing data with `ObjectOutputStream` and `ObjectInputStream`.
3. **Interacting with Users**: Techniques for printing data to the user, reading input as an I/O stream, closing system streams, and acquiring input with the `Console` class.
4. **Working with Advanced APIs**: This includes manipulating input streams, discovering file attributes, traversing a directory tree, and searching a directory.
5. **Review of Key APIs**: A summary and review of the key APIs used in Java I/O and NIO.2.

### Detailed Breakdown

#### Reading and Writing Files

- **Using I/O Streams**:
  - Java provides various classes for reading and writing files, such as `FileReader`, `FileWriter`, `BufferedReader`, and `BufferedWriter`.
  - Streams are used to read from or write to a source (like a file) sequentially.
  - Example:
    ```java
    try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
    ```

- **Enhancing with `newBufferedReader()` and `newBufferedWriter()`**:
  - These methods from the `Files` class simplify the creation of buffered readers and writers.
  - Example:
    ```java
    try (BufferedReader reader = Files.newBufferedReader(Paths.get("file.txt"))) {
        String line;
        while ((line = reader.readLine()) != null) {
            System.out.println(line);
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
    ```

- **Combining with newBufferedReader() and newBufferedWriter()**:
  - These methods enhance the file reading and writing process by providing better performance through buffering.

#### Serializing Data

- **Applying the Serializable Interface**:
  - To serialize an object, it must implement the `Serializable` interface.
  - Example:
    ```java
    public class Person implements Serializable {
        private static final long serialVersionUID = 1L;
        private String name;
        private int age;
    }
    ```

- **Marking Data `transient`**:
  - Fields marked as `transient` are not serialized.
  - Example:
    ```java
    private transient int age;
    ```

- **Storing Data with `ObjectOutputStream` and `ObjectInputStream`**:
  - These streams are used for serializing and deserializing objects.
  - Example:
    ```java
    try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("person.dat"))) {
        oos.writeObject(new Person("John", 30));
    } catch (IOException e) {
        e.printStackTrace();
    }

    try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream("person.dat"))) {
        Person p = (Person) ois.readObject();
        System.out.println(p.getName());
    } catch (IOException | ClassNotFoundException e) {
        e.printStackTrace();
    }
    ```

#### Interacting with Users

- **Printing Data to the User**:
  - Using `System.out` for output and `System.in` for input.
  - Example:
    ```java
    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter your name:");
    String name = scanner.nextLine();
    System.out.println("Hello, " + name);
    ```

- **Reading Input as an I/O Stream**:
  - Utilizing `InputStream` for reading bytes from the console or a file.

- **Acquiring Input with `Console`**:
  - The `Console` class provides methods to read input from the console.
  - Example:
    ```java
    Console console = System.console();
    if (console != null) {
        String username = console.readLine("Username: ");
        char[] password = console.readPassword("Password: ");
        System.out.println("Hello, " + username);
    }
    ```

#### Working with Advanced APIs

- **Manipulating Input Streams**:
  - Includes advanced operations like filtering, converting, and chaining input streams.

- **Discovering File Attributes**:
  - Using `Files` class methods to read file attributes.
  - Example:
    ```java
    Path path = Paths.get("file.txt");
    BasicFileAttributes attrs = Files.readAttributes(path, BasicFileAttributes.class);
    System.out.println("Creation time: " + attrs.creationTime());
    ```

- **Traversing a Directory Tree**:
  - Using `Files.walk()` method to traverse directories.
  - Example:
    ```java
    try (Stream<Path> paths = Files.walk(Paths.get("rootDir"))) {
        paths.filter(Files::isRegularFile).forEach(System.out::println);
    } catch (IOException e) {
        e.printStackTrace();
    }
    ```

- **Searching a Directory**:
  - Using `Files.find()` to search for files matching specific criteria.

### Summary and Exam Essentials

- **Key APIs**: Focus on understanding the classes and methods provided by the Java I/O and NIO.2 APIs.
- **Serialization and Deserialization**: Grasp how objects can be converted to a byte stream and vice versa.
- **User Interaction**: Learn how to handle user input and output effectively.
- **File Attributes and Directory Traversal**: Be adept at retrieving file metadata and navigating through file systems programmatically.

### Review Questions
At the end of each chapter, there are review questions to help reinforce the material learned. If you cannot answer at least 80% of these questions correctly, it's advisable to revisit the chapter sections that are challenging.

---

### Example Review Questions

**Question 1:**
What is the purpose of the `transient` keyword in serialization?

**Answer:**
The `transient` keyword in serialization is used to mark fields that should not be serialized. When an object is serialized, the fields marked as `transient` are not included in the serialized form of the object【40:1†source】【40:2†source】【40:3†source】【40:4†source】【40:5†source】.

**Question 2:**
How can you read all lines of a file into a `List<String>` using NIO.2?

**Answer:**
You can read all lines of a file into a `List<String>` using the `Files.readAllLines()` method from the NIO.2 API. Example:
```java
Path path = Paths.get("file.txt");
List<String> lines = Files.readAllLines(path);
```
