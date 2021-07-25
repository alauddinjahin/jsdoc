// @ts-check


const { add, multiply, subtract, divide} = require('./calculator');


// /**
//  * @file main.js is root file for this doc 
//  * @author Alauddin Jahin
//  * @see <a href="https://github.com/alauddinjahin">Alauddin Jahin</a>
// */

/**
 * @file main.js is root file for this doc 
 * @author Alauddin Jahin
 * @see {@link https://github.com/alauddinjahin|Github Profile}
*/


/**
 * @param {string} name The person's name
 * @param {number} age The person's age
 * @param {string} designation The person's designation
 * @returns {Object} The person's object
 */


function createPerson(name,age,designation){
    return {
        name,
        age,
        designation
    };
}

createPerson('jahin',27,'developer')


class Person{

    /**
     * @param {string} name The person's name
     * @param {number} age The person's age
     * @param {boolean} isDeveloper The person's designation true or false
     */

    constructor(name,age,isDeveloper){
        this.name       = name;
        this.age        = age;
        this.isDeveloper= isDeveloper;
    }


    /**
     * @property { Function } studentName get a student name
    */

    get studentName(){
        return this.name ?? 'No name';
    }
}



/**
 * The Person's details
 * @param {Person} person 
*/

function detailsOfPerson(person){
    console.log(`person name is ${person.name}`)
}


/**
 * See {@link Person}
 */
 const person1 = new Person('John Doe',30,true);
 person1.studentName;
  



/**
 * a teacher 
 * @typedef { Object } Teacher
 * @property { number } id - Teacher ID 
 * @property { string } name - Teacher's name 
 * @property { string|number } age - Teacher's age 
 * @property { boolean } isActive - Teacher's status 
*/


/**
 * teacher object
 * @type { Teacher }
*/

const teacher ={
    id:1,
    name:'jahin',
    age:'27',
    isActive:true
}




/**
 * return array of numbers
 * @returns {number[]}
*/
const numbers = function(){
    return [12,24,36,48,50];
}



/**
 * student name
 * @type {string} 
*/

const studentName = "jahin";



/**
 * array of grades with type number
 * @type {Array<number>}
*/

const grades = [20,40,80,90,93];


/**
 * object property type
 * @type {{ id: number, text: string }}
*/

const todos = {
    id:1,
    text:'todo 1'
};


/**
 * object property type with | 
 * @type {{ id: number|string, text: string }}
*/

const todos2 = {
    id:1,
    text:'todo 2'
};



/**
 * @param {*} amount amount of product
 * @param {*} tax    tax of product
 * 
 * @returns { string | number }
*/

const calculateTax = (amount,tax)=>{
    return `Tk ${amount + amount * tax}`;
}

console.log(calculateTax(20,0.4))


console.log(add(20,200));