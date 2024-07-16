// Defining variables with different data types
let sales = 12_345_6784; // Number with underscore for readability
let course = 'English'; // String
let is_published = true; // Boolean
let level; // Undefined

// Function declaration with a single parameter
function render(document){
    console.log(document); // Logs the document to the console
}

// Initializing an array of numbers with type annotation
let numbers: number[] = [];
numbers[0] = 1; // Assigning a value to the first index

numbers.forEach(n => n); // Iterating through the array

// Tuple type declaration and initialization
let user: [number, string] = [1, '5'];
user.push(1); // Adding an element to the tuple (TypeScript allows pushing elements to a tuple, but this can be a source of bugs)

// Enum declaration with specific values
const enum Size { small = 1, Medium, Large }
let mySize: Size = Size.Medium;
console.log(mySize); // Logs the value of mySize

// Function with optional and default parameters
function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2000)
        return income * 1.2; // Returns income with a 20% tax
    return income * 1.3; // Returns income with a 30% tax
}

calculateTax(10000); // Calling the function with one argument

// Defining a type alias for an Employee object
type Employee = {
    readonly id: number, // Read-only property
    name: string,
    retire: (date: Date) => void // Method with a Date parameter
}

// Initializing an object with the Employee type
let employee: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) => {
        console.log(date); // Logs the retirement date
    }
};

// Function with union type for parameter
function kgtoLbs(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.2; // Converts kg to lbs
    else {
        return parseInt(weight) * 2.2; // Parses string to number and converts kg to lbs
    }
}

kgtoLbs(10); // Calling the function with a number
kgtoLbs('10'); // Calling the function with a string

// Type declaration for draggable and resizable objects
type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

// Intersection type for a UI widget
type UiWidget = Draggable & Resizable;

// Initializing an object with the UiWidget type
let textBox: UiWidget = {
    drag: () => {},
    resize: () => {},
}

// Literal type for quantity
type Quantity = 50 | 100;
let quantity: Quantity = 100; // Assigning a literal type value

// Function with union type parameter and optional chaining
function greet(name: string | null | undefined) {
    if (name)
        console.log(name.toUpperCase()); // Converts name to uppercase and logs it
    else 
        console.log('Hola'); // Logs a default greeting
}
greet(null); // Calling the function with null

// Type declaration with an optional property
type Customer = {
    birthday?: Date
}

// Function returning an object with a Customer type or null/undefined
function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() }; // Returns a Customer object or null
}

let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear()); // Optional chaining to safely access nested properties

// Additional Notes:
// 1. Type annotations: Always use type annotations for better type safety and readability.
// 2. Enums: Use enums to define a set of named constants, which makes the code more readable and maintainable.
// 3. Union types: Use union types to allow a variable to have multiple types, providing flexibility.
// 4. Type Aliases: Use type aliases to create custom types, making the code more expressive and easier to understand.
// 5. Optional Properties and Parameters: Use optional properties and parameters to handle cases where a value might be missing.
// 6. Readonly Properties: Use readonly properties to prevent modification of object properties after initialization.
// 7. Intersection Types: Use intersection types to combine multiple types into one, ensuring that an object must satisfy all types.
// 8. Classes: TypeScript supports ES6 classes with additional features like access modifiers (`public`, `private`, `protected`), which control the visibility of class members.
class Person {
    private name: string; // Private member, accessible only within the class
    public age: number; // Public member, accessible anywhere
    protected address: string; // Protected member, accessible within the class and its subclasses

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

// 9. Generics: Use generics to create reusable components that can work with any data type.
function echo<T>(arg: T): T {
    return arg;
}

echo<number>(123); // Using generics with a number
echo<string>('Hello'); // Using generics with a string

// 10. Type Assertions: Use type assertions to tell the compiler to treat a variable as a different type.
let someValue: unknown = 'this is a string';
let strLength: number = (someValue as string).length;

// 11. Non-null Assertion Operator: Use the non-null assertion operator to assert that a value is not null or undefined.
function processValue(value?: string) {
    let length = value!.length; // Non-null assertion operator
    console.log(length);
}

// 12. Module System: TypeScript uses ES6 module syntax to import and export modules.
import { MyModule } from './MyModule';
export class AnotherModule {}

// 13. Decorators: Decorators are a special kind of declaration that can be attached to a class, method, accessor, property, or parameter.
function MyDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('MyDecorator called on:', target, propertyKey, descriptor);
}

class MyClass {
    @MyDecorator
    myMethod() {
        console.log('myMethod called');
    }
}
