# Intro to JavaScript

## Types of Languages

There are two types of programming languages - interpreted languages and compiled languages.

A compiled language is consumed by a program called a compiler and is converted into machine code, code that is not readable by humans.
Machine code is read directly by your computer as instructions. Programs written in compiled languages are stored in a binary format
that your computer can run. A very common example of this is any file that ends with the `.exe` extension.

An interpreted language, also known as a scripting language, is converted to machine code in real time as the program is run. Rather than running a binary file,
like an executable, a program called an _interpreter_ reads the code of the interpreted language and converts it into machine code in real time.

There are pros and cons to both types of languages. Compiled languages are typically faster, but also more complicated and may take time to build/compile before
being run. Interpreted languages are typically easier to learn, look more like human language, and can be run without delay by an interpreter, but suffer from
performance loss.

Compiled languages are more _portable_ because they typically compile into a file that can be run on an operating system without further software. For example,
C# code that is compiled for Windows 10 can be run on Windows 10 without downloading anything. Code from an interpreted language, like Python, requires
a runtime to be installed so the code can be run.

## Getting Started

### Downloading Node

Node.JS is a JavaScript runtime. JavaScript is an interpreted language, meaning you need a program to interpret your files and turn them into machine code. Node can be downloaded here - [https://nodejs.org/en/](https://nodejs.org/en/)

### Running Node

After the installation is finished, open PowerShell. Enter `node -v` into PowerShell, it should return what version of Node you have installed.

### Downloading Visual Studio Code

Visual Studio Code is an open sourced text editor published by Microsoft. It is a powerful tool that makes writing code very simple. You can open a folder with VS Code to edit multiple files in a project at once. It has many handy features, like auto-complete. VS Code can be downloaded here - [https://code.visualstudio.com/](https://code.visualstudio.com/).

## Hello World

"Hello World" is typically the first program every single programmer writes. Any "hello world" program is one that outputs the statement "hello world" and does nothing else.

Create a new file on your desktop named "HelloWorld.js". Right click the file and open it with Visual Studio Code. Copy the following code snippit into the file and save it.

```javascript
console.log("Hello World");
```

You can open PowerShell inside Visual Studio Code. It usually opens itself by default, if it has you will see the prompt open at the bottom of VS Code labeled "TERMINAL". If it isn't there, it can be opened any time by pressing ctrl and the backtick key (the key to the left of 1 and above tab) at the same time.

With powershell open, type `node HelloWorld.js`. You can use autocomplete to make it easier to run this file - after entering `node H` you can hit tab and PowerShell will look for any file that starts with an H and fill the rest of the file name for you. You should see the console output "Hello world".

## Functions

A function is a saved set of instructions that can take an input and can return an output. Functions make it possible to re-use code. Edit your `HelloWorld.js` file to look like this snippit:

```js
function sayHello() {
  console.log("Hello World");
}

sayHello();
```

If you run this file with PowerShell again, you'll notice that it did the exact same thing. In the above snippit, we created a function that will print "Hello world" to the console every time it's called. In JavaScript, a function is defined with the `function` keyword followed by the function name, the function inputs, and then the function itself. In our example the function has an open and close parenthesis next to the name, this signifies that the function takes no inputs. After the input we tell JavaScript what code will be in the function by putting it inside brackets.

The function can then be called using the function name supplied with inputs. Again, we have no inputs, so calling the function requires us to use empty parenthesis.

You might now notice that in our `console.log()`, `log()` is a function that we have been passing "Hello World" to as an input.

Functions can also return values with the `return` keyword.

```js
function addTwoNumbers(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
```

The above snippet will add two input numbers together and return the result.

## Variables

Code can be stored in memory using variables. Variables help you store the result of an operation or function and to re-use data. Edit `HelloWorld.js` to look like this:

```js
function sayHello() {
  var hello = "Hello World";
  console.log(hello);
}

sayHello();
```

Running the file in PowerShell will show that it still does the same thing. We stored the "hello world" statement inside of a variable called `hello` and then we pass that variable to our `console.log()`. `Var` is a keyword that signifies we are creating a new variable.

There are three keywords used to create variables, `var`, `let`, and `const`. We won't worry about `let` right now, but `const` is used when you don't want the value of a variable to change. You can reassign the value in `hello`; we can, for example do the following:

```js
function sayHello() {
  var hello = "Hello World";
  hello = "Goodbye World";
  console.log(hello);
}

sayHello();
```

If you run this snippit, you'll see that the program now outputs "Goodbye World". This is because we have re-assigned the value in the variable that's being passed to `console.log()`. Also notice that when re-assigning the variable, we do not use a variable keyword again. This is because the variable already exists in memory, we are just changing the value it stores.

If you change the program to look like this:

```js
function sayHello() {
  const hello = "Hello World";
  hello = "Goodbye World"; // This is an error
  console.log(hello);
}

sayHello();
```

The program will error out when you try to run it and point to the line `hello = "Goodbye World"` as the issue. This is because `hello` was defined as a constant here, its value can no longer be changed.

## Types

Variables store data using a type system, where a type represents what kind of data is being stored. In our example code `hello` stores a string. A string is any sequence of letter characters. There are other types, such as a Boolean, which can be either `true` or `false`, or a Number, which represents any number.

JavaScript is a loosely typed language, meaning it does not have an enforced type system. In strongly typed programming languages, variables are typically made using their type as a keyword instead of a keyword like `var` and the program will error out if you try to store data of the incorrect type.

The type of a variable in JavaScript can be obtained with the `typeof` keyword.

The following is an example of this from the language C#

```csharp
// C#
int a = 10;
a = "hello" // This is an error
```

The above code will cause an error in C# because the code is trying to assign a string to an integer typed variable. Integer here is just another word for number. Similar
code in JavaScript will not cause an error as variables are not tied to any type value.

```js
// JavaScript
var a = 10;
a = "hello"; // This is valid code
console.log(typeof a); // This will print "number"
```

## Operators

Operators allow you to perform operations on variables and data. There are arithmetic, comparison, assignment, bitwise, and logical operations.
We will not worry about bitwise ones right now.

### Arithmetic Operators

Arithmetic operators allow you to perform simple math on data.

```js
let birthYear = 1995;
let age = 2021 - birthYear;
```

| Operator | Description                                        |
| -------- | -------------------------------------------------- |
| +        | Adds two things together                           |
| -        | Subtracts two things                               |
| /        | Divides two things                                 |
| \*       | Multiplies two things                              |
| %        | Returns the remainder from dividing two things     |
| \*\*     | Raises the first number to the power of the second |

### Comparison Operators

Comparison operators are used in logical statments to determine what code to run. These operators create statements that result in a boolean value.
For example, the code `5 > 10` will be interpreted as `false`, since 5 is not greater than 10.
Logical statements will come after operators, understanding exactly what these are used for is not important yet.
| Operator | Description |
|----------|------------- |
| == | Equal to |
| != | Not equal to |
| > | Greater than |
| < | Less than |
| >= | Greater than or equal to |
| <= | Less than or equal to |

### Assignment Operators

Assignment operators include the = character and shorthand for using an arithmetic operator on a variable and replacing the variable's data with the result.

```js
let age = 10;

// The two lines below do the same exact thing, the first one is just using an assignment operator shorthand.
age += 5;
age = age + 5;
```

| Operator | Description                                    |
| -------- | ---------------------------------------------- |
| =        | Sets the value of a variable                   |
| +=       | Adds two things together                       |
| -=       | Subtracts two things                           |
| /=       | Divides two things                             |
| \*=      | Multiplies two things                          |
| %=       | Returns the remainder from dividing two things |

### Logical Operators

Logical operators allow you to chain together other operators. A statement made using `and` will be true if both of its
arguments are true. A statement made using `or` will be true if either one of its arguments are true. `Not` will invert a statement.

| Operator | Description |
| -------- | ----------- |
| &&       | And         |
| \|\|     | Or          |
| !        | Not         |

Example:

```js
100 > 10 && 1000 > 500  // This line is true since it is a true statement AND a true statement
100 > 10 && 1 > 100     // This line is false since it is a true statement AND a false statement
100 > 10 \|\| 1 > 100   // This line is true since it is a true statement OR a false statement
!true                   // This line is false since it is an inversion of a true statement
```

## Flow Control

Flow control includes keywords that allow you to choose what code to execute next or repeat certain lines of code a certain amount of times, potentially
until some condition is met.

### if / else

The most common flow control keyword, `if`, runs its associated block of code if the logical statement after the keyword is `true`.

```js
let example = true;
if (example == true) {
  // This block will run
}
if (example) {
  // This block will run
}
```

In the above example, the two `if` statments are the same. JavaScript will check if the logical statement evaluates to `true` on its own, you do not need to check if something is equal to `true` yourself.

`if` is commonly paired with `else`, which is a block of code that will run if the first does not run. `if` and `else` can be on the same line to create a chain
of statements.

```js
let age = 10;
if(age < 5) {
    // This block will not run
}
else if age < 7 {
    // This block will not run
}
else {
    // This block will run
}
```

## Switch

A switch statement is a nicer way to switch between a chain of different cases. This is a preferred syntax if your code would have a long series of `else if` statements.
Is is very important to include the `break` keyword at the end of each switch case, if you don't then the following case will run even if it does not match. Switch
statements can end with a `default` block, which will run if none of the cases match.

```js
const color = "blue";
switch (color) {
  case "red":
    console.log("Favorite color is red");
    break;
  case "green":
    console.log("Favorite color is green");
    break;
  case "blue":
    console.log("Favorite color is blue"); // This will be printed
    break;
  default:
    console.log("Your favorite color is not listed");
}
```

## Arrays

An array is a data structure used to store multiple values. In most languages arrays must contain only one type of value, like an array of all numbers. In JavaScript an array can contain different types. Arrays can be accessed using brackets with a number representing the index of the value you want to check. Arrays in most languages, including JavaScript, are zero-indexed. This means that the first value is at index 0, the second value is at index 1, and so on. `someArray[0]` will access the first value stored in an array called `someArray`. In some languages, accessing an index with no value stored in it is an error, in JavaScript this will return `undefined`.

Arrays are an _object_. An object is another data type, like a number or string. Objects can be complicated and will not be described yet.
What is important is that the array object has certain functions and properties that can be accessed to modify the array and gain information about it.

```js
let myArray = [10, 20, 30, 40, 50];
console.log(myArray[0]); // This is the first value, 10
console.log(myArray[4]); // This is the final value, 50
console.log(myArray[5]); // This is undefined

console.log(myArray.length); // This will print the length of the array, this line will print "5" as there are five values in the array.

// The following line will print the final value in the array, 50. Remember that JavaScript is a zero indexed language, so the 5th value is accessed
// with an index of 4. We need to subtract 1 from the length to "convert" the length to being zero indexed.
console.log(myArray[myArray.length - 1]);

myArray.push(100); // This will add a value of 100 to the end of the array.
console.log(myArray.length); // This will now print "6" as there are now six values in the array.
console.log(myArray[5]); // This will now print "100" instead of undefined.
```

There are many more functions that array objects have access to, see the [reference section](#references) at the bottom of this file.

### Loops

Loops allow you to run the same block of code repeatedly until some condition is met. Loops can also be ended early by using the `break` keyword. An iteration
of a loop can be ended early and move the loop to the next iteration with the `continue` keyword.

1. While - this type of loop will run until the logical statement given to it becomes false

```js
let keepLoopRunning = true;
let counter = 0;
while (keepLoopRunning) {
  if (counter > 10) {
    keepLoopRunning = false;
  }
  counter += 1;
}
// counter here is 12

keepLoopRunning = true;
counter = 0;
while (keepLoopRunning) {
  if (counter > 5) {
    break;
  }
  counter += 1;
}
// counter here is 6
```

In the above snippet, the two `while` loops are _almost_ exactly the same. In the first loop, `keepLoopRunning` is set to false when `counter` is greater than 10. The code will keep running inside the loop until this final loop is finished, so `counter` will be incremented one more time and end with a value of 12. In the second loop, the `break` keyword is used when `counter` is greater than 5. This will exit the loop immediately, leaving `counter` with a value of 6.

2. for/in
   A for/in loop will iterate through an iterable object, like an array.

```js
const numbers = [45, 4, 9, 16, 25];
let sum = 0;
for (let index in numbers) {
  sum += numbers[index];
}
console.log(sum); // This will print "99"
```

3. for
   This kind of for loop is made up of three statements put together. The first statement creates a variable used to control the loop,
   the second statement defines the condition to keep the loop running, and the third statement is an operation performed at the end of each loop.

```js
const numbers = [45, 4, 9, 16, 25];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // This will print "99"
```

In this for loop, `i` is defined as our flow control variable and initialized with a value of 0. We then tell the loop to run while `i` is less than
the value of `cars.length` and increment the value of `i` by one at the end of each loop. This is a common pattern to iterate through arrays and is functionally
the same as the above for/in loop. The added bonus here is that we have a variable which tells us which index a given iteration of the loop is using.

## Classes

A class is a feature used in _object oriented_ programming languages. Object oriented programming languages are languages that primarily operate
using classes and objects. Understanding object oriented programming is not important yet, but keep in mind that JavaScript is an object oriented language.

An easy way to think of a class is viewing it as a blueprint.

Example:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }

  isSquare() {
    return this.height == this.width;
  }
}

var newRectangle = new Rectangle(10, 10);
console.log(newRectangle.area()); // This will print "100"
console.log(newRectangle.isSquare()); // This will print "true"

var anotherRectangle = new Rectangle(5, 10);
console.log(anotherRectangle.area()); // This will print "50"
console.log(anotherRectangle.isSquare()); // This will print "false"
```

In the above snippet, `Rectangle` is a class. `Rectangle` is a "blueprint" for an object representing a rectangle. After defining the class, we create
two instances of the rectangle class - we use the blueprint of the rectangle to create actual rectangles.

Classes can contain _fields_ and _functions_. A field on a class is data associated with an instance of it. In the above snippet, `height` and `width` are fields.
An instance of a class is what we call a variable that has been created using that class. Class functions are special and do not need the `function` keyboard
in front of their name, they just need the function name and parenthesis indicating their inputs. Classes also use a special keyword, `this`, to indicate that
we want to use data associated with an instance of the class.

Classes are created with the `new` keyword followed by the name of the class with parenthesis containing the inputs to the class.
Classes can contain a special function which must always be named `constructor` which is run when a class is created. The constructor function
will take inputs supplied when creating an instance of a class and can set the class fields.

Class functions are called by adding a period after the class instance name and then adding the function name followed by parenthesis with the function
inputs. In the above snippet, `.isSquare()` and `.area()` are class functions.

## Name Conventions

By now you might have noticed that variable and function names in example code have all followed the same naming convention. A name convention is the style used when
naming variables, functions, and other data. Programming languages have standard naming conventions so programs can be more easily understood between programmers.
Not following a naming convention won't cause an error, but it is a good idea to stick to them. Every language uses a naming convention.
Naming conventions can also vary within a language for certain types of data. There are four major naming conventions, they are listed below.

| Naming Convention | Description                                                                                 | Example             |
| ----------------- | ------------------------------------------------------------------------------------------- | ------------------- |
| Camel Case        | Names begin with a lower case letter and the first letter of each new word is capitalized.  | camelCaseVariable   |
| Pascal Case       | Names begin with an upper case letter and the first letter of each new word is capitalized. | PascalCaseVariable  |
| Snake Case        | Names are all lower case and an underscore is placed between words.                         | snake_case_variable |
| Kebab Case        | Names are all lower case and a dash is placed between words.                                | kebab-case-variable |

In JavaScript functions and variables should use camel case while classes should use pascal case.

## Scope

### var vs. let

## Error handling

# References

The best reference for learning JavaScript is the Mozilla Developer web docs. They can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript).
If you want information about a specific topic, you can google the topic with "mdn" and the Mozilla developer doc will typically be the first result.
For example, googling "Javascript array mdn" will bring you to the [MDN JS Array page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).
These pages will contain information about a topic and associated functions and properties, typically with example code.
