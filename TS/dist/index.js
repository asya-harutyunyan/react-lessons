"use strict";
// const a: number = 1 + 2;
// const b: number = a + 3;
// const c = {
//   apple: a,
//   banana: b,
// };
// const d = c.apple * 4;
// const squareOf = (num: number) => num * num;
// console.log(squareOf(4));
// console.log(squareOf(+"4"));
//!Any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const a: number = 4;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// const b: number[] = [1, 2, 3];
//no errors because we set a to any and b to any so TS does not understand if it is number or array basically it does not check at all
// const c = a + b;
// console.log(c); //chi gumari
//!unknown
//*where you have a value whose type you really don't know ahead of time, don't use, and instead reach for. Like represents any value, but TS won't let you use an until you refine it by checking what it is
// const a: unknown = 30;
// //console.log(a+8);// ete unknown lini chi toxi, chi haskanum vor numbera
// //piti type stugenq heto inch vor gorcoxutyun anenq
// if (typeof a === "number") {
//   console.log(a + 8); //38
// }
//!boolean
// const a = true;
// const b = false;
// const c = true;
// const d: boolean = true;
// const e: true = true;
// const f: true = false; // Error Type "false" is not assignable to type 'true'
// console.log(a, b, c);
//!number
/*
 *number is the set of all numbers:integers, floats, positives, negatives, infinity, NAN, and so on.
 */
// const a = 1234;
// const b = Infinity * 0.1;
// const c = 5678;
// const e: number = 100;
// const f: number = 2678;
// console.log(f);
// const g: 2678 = 10; //Type '10' is not assignable to type '2678'.
//!Bigint
/*
 *Bigint is a newcomer to JS and TS: it lets you work with large integers without running into rounding errors. While the type can only represent whole numbers up to 253, can represent integers bigger than that too. The type is the set of all BigInts, and supports things like addition (+), subtraction(-), multiplication(*), division(/), and comparison(==, ===)
 */
// const a = 1234n;
// const b = 5678n;
// const c = a + b;
// const d = a < 12345;
// const e: bigint = 100n;
// const f: 100n = 100n;
// const g: 100n = 100; //Type '100' is not assignable to type '100n'.
//!string
/*
 *string is the set of all strings and the things you can do with them like concatenate(), slice(), and so on.
 */
// const a = "hello";
// const b = "billy";
// const c: string = "zoom";
//Can't be used like this
// const d: string = "Max";
// const e: d = "Max"; //'d' refers to a value, but is being used as a type here.
//It can be this way
// const g: "Max" = "Max";
//!Symbol
/*
 *symbol is a relatively new language feature that arrived with one of the latest major JS revisions(ES2015).
 Symbols don't come up often in practice, they are used as an alternative to string keys in objects and maps, in places where you want to be extra sure that people are using the right well-known key and didn't accidentally set the key-think setting a default iterator for your object(Symbol.iterator), or overriding at runtime whether or not your object is an instance of something
 */
// const a = Symbol("a");
// const b: symbol = Symbol("a");
// const c = a === b;
// const d = a + "x"; //The '+' operator cannot be applied to type 'symbol'.
/*
Similarly to how the value is inferred to be when declared with let but the specific number when you declare it with const, symbols are inferred to be of type symbol but can be explicitly typed as unique symbol:
*/
// const e = Symbol("e");
// const f: unique symbol = Symbol("f");
// const g: unique symbol = Symbol("g"); // can't be written with let. //The error will be- A variable whose type is a "unique symbol" type must be 'const'.
//*but if we declare it with const there will be no erroe=r, a unique symbol is always equal to himself
//!Objects
/*
TS object types specify the shapes of objects. Notably, they can't tell the difference between simple objects(like the kind you make with) and more complicated ones(the kind you create with). This is by design: JS is generally structurally typed, so TS favors that style of programming over a nominally typed style.
*/
/*
 *STRUCTURAL TYPING
 *A style of programming where you just care that an object has certain properties, and not what its name is(nominal typing). Also called duck typing in some languages
 */
//*There are a few ways to use types to describe objects in TS. The first is to declare a value as an object:
// const a: object = {
//   b: "x",
// };
//! : means what it will return
//when we access b what we will get
//console.log(a.b); //Property 'b' does not exist on type 'object'. //But in console it outputs x
//!right version
// const a: { b: string } = {
//   b: "x",
// };
// console.log(a.b);
// const c: { firstName: string; lastName: string } = {
//   firstName: "John",
//   lastName: "Smith",
// };
//!with classes
// class Person {
//   constructor(public firstName: string, public lastName: string) {}
// }
// const d = new Person("Matt", "Smith");
// console.log(d);
//!
//*When we declare a variable in one place and initialize it later, TS will make sure that your variable is definitely assigned a value by the time you use it:
// let a: {
//   b: number;
//   c?: string;
//   [key: number]: boolean;
// };
//*1) in  this declared object above a has a property that is a number
//*2) a variable might have a property that's a string. And if is set, it might be undefined
//*3) a might have any number of numeric properties that are booleans
// eslint-disable-next-line prefer-const
// a = { b: 1 };
// a = { b: 1, c: undefined };
// a = { b: 1, c: "d" };
// a = { b: 1, 10: true };
//a = { b: 1, 10: true, 20: false };
//a = { 10: true }; //Property 'b' is missing in type '{ 10: true; }' but required in type '{ [key: number]: boolean; b: number; c?: string | undefined; }'.
//a = { b: 1, 33: "d" }; //Type 'string' is not assignable to type 'boolean'.
//!Intermission: Type Aliases, Unions and Intersections
//!Type aliases
//*Just like you can use variable declarations(, , and) to declare a variable that aliases a value, you can declare a type alias that points to a type. It looks like this:
// type Age = number;
// type Person = {
//   name: string;
//   age: Age;
// };
//*LIke JS variable declarations(let, const, var) you can't declare a type twice:
// type Color = "red";
// type Color = "blue"; //Duplicate identifier 'Color'.
//*Type aliases are block scoped. Every block and every function has its own scope,and inner type alias declarations shadow outer ones:
// type Color = "red";
// const x = Math.random() < 0.5;
// if (x) {
//   type Color = "blue";//this shadows the Color declared above
//   const b: Color = "blue";
// } else {
//   const c: Color = "red";
// }
////////////////
// type User = {
//   firstName: string;
//   lastName: string;
//   email: string;
// };
// const user: User = {
//   firstName: "John",
//   lastName: "Smith",
//   email: "smith111@gmail.com",
// };
// const userHandler = (user: User) => {
//   console.log(user.firstName);
//   // console.log(user.age); //Property 'age' does not exist on type 'User'.
// };
// userHandler(user);
//!Union and Intersection types
//*If you have two things A and B, the union of those things is their sum(everything in A or B or both), and the intersection is what they have in common(everything in both A and B)
//*Typescript gives us special type operators to describe unions and intersections of types:  | for union and & for intersection. Since types are a lot like sets, we can think of them in the same way:
// type Cat = {
//   name: string;
//   purrs: boolean;
// };
// type Dog = {
//   name: string;
//   barks: boolean;
//   wags: boolean;
// };
// type CatOrDogOrBoth = Cat | Dog; //union
// //Cat
// const cat: CatOrDogOrBoth = {
//   name: "Bonkers",
//   purrs: true,
// };
// //Dog
// const dog: CatOrDogOrBoth = {
//   name: "Domino",
//   barks: true,
//   wags: true,
// };
//Both Cat and Dog
// const catAndDog: CatOrDogOrBoth = {
//   name: "Bonkers",
//   barks: true,
//   wags: true,
//   purrs: true,
// };
//*Unions come up naturally a lot more often than intersections do. Take this function, for example:
// type Returns = string | null;
// function trueOrNull(isTrue: boolean): Returns {
//   if (isTrue) {
//     return "true";
//   }
//   return null;
// }
// console.log(trueOrNull(true));
//////////////
// type CatAndDog = Cat & Dog; //Intersection
// const catAndDog: CatAndDog = {
//   name: "Bonkers",
//   barks: true,
//   wags: true,
//Type '{ name: string; barks: true; wags: true; }' is not assignable to type 'CatAndDog'.
//Property 'purrs' is missing in type '{ name: string; barks: true; wags: true; }' but required in type 'Cat'.
// };
//!All properties should be
/////////////////////////////////////////////
//!Arrays
//*TS arrays are special kinds of objects that support things like concatenation, pushing, searching, and slicing
// const abc = [1, 2, 3]; //number[]
// const b = ["a", "b"]; //string[]
// const c = ["a", "b"]; //string[]
// const d = ["a", "b", 1]; //(string | number)[]
// const e = ["red"];
//We can also write like this
// const [k, l]: [k: string, l: string] = ["a", "b"];
// const f: [] = [];
// f.push(1); //Argument of type 'number' is not assignable to parameter of type 'never'.
// console.log(f);
// const g = [1, "a"];
// const h = g.map((el) => {
//   if (typeof el === "number") return el * 3;
//   return el.toUpperCase();
// });
// console.log(h); //[3, 'A']
//*When you initialize an empty array, TS doesn't know what type the array's elements should be, so it gives you the benefit of the doubt and makes them any. As you manipulate the array and add elements to it, TS starts to piece together your array's type. Once your array leaves the scope it was defined in (for example, if you declared it in a function, then returned it), TS will assign it a final type that can't be expanded anymore
//!Tuples
//*Tuples are subtypes of array. They're a special way to type arrays that have fixed lengths, where the values of each index have specific, known types. Unlike most other types, tuples have to be explicitly typed when you declare them. That's because the JS syntax is the same for tuples and arrays(both use square brackets), and TS already has rules for inferring array types from square brackets.
// const a: [number] = [1, 4, 5]; //Type '[number, number, number]' is not assignable to type '[number]'.Source has 3 element(s) but target allows only 1.
// const b: [number, number, number] = [1, 4, 5];
//with destructuring
// const [one, two, three]: [number, number, number] = [1, 2, 3];
// console.log(two); //2
// let c: [string, string, number] = ["a", "b", 3];
// c = ["a", "b", "c"]; //Type 'string' is not assignable to type 'number'.
//!Optional
//*Tuples support optional element too. Just like in object types, means "optional":
// const trainFares: [number, number?][] = [[3], [8.25, 7.7]];
// console.log(trainFares);
//!Rest
//* Tuples also support rest elements, which you can use to type tuples with minimum lengths:
// const friends: [string, ...string[]] = ["Sarah", "Tali", "Chloe", "Claire"];
// console.log(friends); //['Sarah', 'Tali', 'Chloe', 'Claire']
// const list: [number, boolean, ...string[]] = [4, true, "a", "b"];
// console.log(list);
//!Read-only arrays and tuples
//*While regular arrays are mutable(meaning you can onto them, and update them in place), which is probably what you want most of the time, sometimes you want an immutable array-one that you can update to produce a new array, leaving the original unchanged. TS comes with a readonly array type out of the box, which you can use to create immutable arrays. Read-only arrays are just like regular arrays, but you can't update them in place. To create a read-only array, use an explicit type annotation, to update a read-only array, use non mutating methods like .concat and .slice instead of mutating ones like .push and .splice.
/*
const as: readonly number[] = [1, 2, 3];
// as.push(4); //Property 'push' does not exist on type 'readonly number[]'.

const bs: readonly number[] = as.concat(4);
console.log(bs); //[1, 2, 3, 4]

const three = bs[2];
console.log(three); //3

// as[4] = 5; //Index signature in type 'readonly number[]' only permits reading.

//*Like Array, Typescript comes with a couple of longer-form ways to declare read-only arrays and tuples
type A = readonly string[]; //type A = readonly string[]
type B = ReadonlyArray<number>; //type B = readonly number[]
type C = Readonly<string[]>; //type C = readonly string[]
type D = readonly [number, string];
type E = Readonly<[number, string]>; //type E = readonly [number, string]
*/
// type Maybe<T> = T | null;
// const [state, setState] = useState<Maybe<number>>(""); //kara lini number kam null, numbery galisa T-i texy
//!null, undefined, void and never
//*Javascript has two values to represent an absence of something:null and undefined. TS supports both of these as values, and it also has types for them-any guess what they're called? You got it, the types are called null and undefined too.
//*void is the return type of a function that doesn't explicitly return anything.
//*never is the type of a function that never returns at all (like a function that throws an exception, or one that runs forever)
//*function that returns a number or null
// const a = (x: number) => (x < 10 ? x : null);
//*a function that returns undefined
// const b = () => undefined;
const b = (t, b) => undefined;
//const b: This declares a constant variable named b.
//: (t: string, b: number) => undefined: This part specifies the type of b. It indicates that b is a function that takes two parameters: t (a string) and b (a number), and it returns undefined.
//= (t: string, b: number): undefined => undefined;: This part provides the implementation for the function assigned to b. It's an arrow function that takes two parameters (t and b) of types string and number, respectively. The function body simply returns undefined.
//*a function that returns a void
// const c = () => {
//   const a = 2 + 2;
//   const b = a * a;
// }; //const c: () => void
// function printHello(): void {
//   console.log("Hello!");
// }
// printHello();
//*a function that returns never
// const d = () => {
//   throw TypeError("I always error");
// };
// const e = () => {
//   while (true) {
//     //do something
//   }
// };
//!Types that mean an absence of something
//*null- Absence of a value
//*undefined- Variable that has not been assigned a value yet
//*void-Function that doesn't have a statement
//*never-Function that never returns
//!Enums
//*Enums are a way to enumerate the possible values for a type. They are unordered data structures that map keys to values. Think of them like objects where the keys are fixed at compile time, so Typescript can check that the given key actually exists when you access it.
//*THere are 2 kinds of enums:enums that map from strings to strings, and enums that map from strings to numbers. They look like this:
// enum Language {
//   English,
//   Spanish,
//   Russian,
// }
//*By convention, enum names are uppercase and singular. Their keys are also uppercase.
//TS will automatically infer a number as the value for each member of your enum, but you can also set values explicitly. Let's make explicit what TS inferred in the previous example:
// enum Language {
//   English = 0,
//   Spanish = 1,
//   Russian = 2,
// }
// enum ShirtSizeEnum {
//   sm = "sm",
//   md = "md",
//   lg = "lg",
//   xl = "xl",
// }
// const sizeHandler = (size: ShirtSizeEnum) => {
//   switch (size) {
//     case ShirtSizeEnum.sm:
//       console.log(ShirtSizeEnum.sm);
//       break;
//     case ShirtSizeEnum.md:
//       console.log(ShirtSizeEnum.md);
//       break;
//     case ShirtSizeEnum.lg:
//       console.log(ShirtSizeEnum.lg);
//       break;
//     case ShirtSizeEnum.xl:
//       console.log(ShirtSizeEnum.xl);
//       break;
//     default:
//       console.log("default");
//   }
// };
// sizeHandler(ShirtSizeEnum.lg);
//*To retrieve a value from an enum, you access it with either dot or bracket notation-just like you would to get a value from a regular object
// const myFirstLanguage = Language.Russian;
// console.log(myFirstLanguage); //2
// const mySecondLanguage = Language["English"];
// console.log(mySecondLanguage); //0
//*You can split your enum across multiple declarations, and TS will automatically merge them for you
//Beware that when you do split your enum, TS can only infer values for one of those declarations, so it's good practice to explicitly assign a value to each enum member
// enum Language {
//   English = 0,
//   Spanish = 1,
// }
// enum Language {
//   Russian = 2,
// }
//*You can use computed values, and you don't have to define all of them (TS will do its best to infer what's missing)
// enum Language {
//   English = 0,
//   Spanish = 1,
//   Russian,
// }
//!Functions
//!Declaring and Invoking functions
const add = (a, b) => a + b;
//function declaration
function greet1(name) {
    return "hello" + name;
}
//function expression
const greet2 = function (name) {
    return "hello" + name;
};
//arrow function
const greet3 = (name) => "hello" + name;
