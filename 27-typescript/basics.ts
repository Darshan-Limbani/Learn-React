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

let person: {
    name: string,
    age: number
    friends: string[]
}

person = {
    name: 'darshan',
    age: 21,
    friends: ['udit', 'deep']
}

let hobbies: string[];

hobbies = ['cricket', 'carrom']

let people: {
    name: string,
    age: number
}[]


// Type Inference
// let course: string = "React JS"   // Redundant ts automatically takes te type if assign immediately
let course = "React JS"

// course = 256



