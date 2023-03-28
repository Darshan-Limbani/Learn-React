// Primitive : number, string, boolean
// More complex type : arrays, objects
// Function types, parameter


//Primitives

let age: number;

age = 21;

let userName: string;

userName = "Darshan";

let isInstructor: boolean;

isInstructor = false

// More complex types


// Type Aliases
type People = {
    name: string,
    age: number
}

let person: People

person = {
    name: 'darshan',
    age: 21,
}

let hobbies: string[];

hobbies = ['cricket', 'carrom']

let people: People[]


// Type Inference
// let course: string = "React JS"   // Redundant ts automatically takes te type if assign immediately
let course = "React JS"

// course = 256


// Union Typing

let courses: string | string[] = "React"

courses = ['React', 'Node']

let user: string | number;
user = 'Doe'
user = 123


// Functions & Types

function add(a: number, b: number):number{
    return a + b
}


function display(value:any):void{
    console.log(value)
}


display(5)





