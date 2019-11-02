export default function introduce(person: string) {
    return "Hello, " + person;
}

let user = "My name is SickSheep";

console.log('-------------introduce');
console.log(introduce(user));