console.log("Sanity!");





// ### Problem 1:

// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code.
class GitHubRepository {
    constructor(userName, fileName, descriptionOfRepoistory, code){
        this.userName = userName; //parameter passed in
        this.fileName = fileName; //parameter passed in
        this.descriptionOfRepoistory = descriptionOfRepoistory; //parameter passed in
        this.code = code; //parameter passed in

        // reminder: THIS. <= this is the paramenter we pass in
        // the name on the left is what we want to refer to the paramter as!!
    }
    //  Create a function that prints all properties.
    print(){
        console.log(`${this.userName}, ${this.fileName}, ${this.descriptionOfRepoistory}, ${this.code}`); // method that prints the properties!

    }
    //   Create an instance of the class and use the function.
  

}
exercise1 = () =>{
    let GitHubRepository1 = new GitHubRepository("LizzyRho21", "JSprojects", "My JS projects summary", true); // creating a NEW instance of the object!!
    GitHubRepository1.print(); // call the method we wrote
}
//UNCOMMENT THE EXERCISE1 METHOD TO SEE THE RESULTS!
// exercise1(); // call the function we create to run the class!



// ### Problem 2:


// Create an instance of the class and use the two methods you created.

// Create a Movie class with the following properties: movieName, rating, and yearReleased. 
class Movie {
    constructor(movieName, rating, yearRelased){
        this.movieName = movieName;  //parameter passed in
        this.rating = rating;  //parameter passed in
        this.yearRelased = yearRelased;  //parameter passed in
    }
    // Create a method to change the rating 
    setrating() 
    {
    this.rating = prompt("What is your rating from 0-10?"); // whatever is passed into the parameter CHANGES the default parameter we set in the beginning
    }

   //  add another method to change the yearReleased properties using prompt
   setYearRelased() {
this.yearRelased = prompt("What year was this movie released?"); // changed the year relased parameter to a prompt for the user to enter the information!
   }

//PRINT THE RESULTS METHOD
    print() {
        console.log(`${this.movieName}, ${this.rating}, ${this.yearRelased}`);
    }
    
}
exercise2 = () =>{

let movie1 = new Movie("Fantastic 4", " ",  " " ); // empty strings to add the information!
movie1.setrating(); // CALL THE METHOD
movie1.setYearRelased();  // CALL THE METHOD
movie1.print();  // CALL THE METHOD
}
//exercise2(); // calling the exercise! 


// ### Problem 3:



let button = document.getElementById("update");



// Create a Student class with the following properties : studentName, codeSchoolCohort, and grades(grades should be an array of objects and each object should have the properties assignemtName and assignemtnScore).
class Student {
constructor(studentName, codeSchoolCohort){
    this.studentName = studentName; // parameter passed in
    this.codeSchoolCohort = codeSchoolCohort; // parameter passed in
    this.grades = []; // empty array!
    
}

//  Create a method that accepts a student name and updates the studentName of an instance of your Student Class. 
//   Create two instances of this class with empty grade arrays. Update the name of one instance of the Student Class using the class method.
setStudentName () {
    this.studentName = prompt("What is your name, student?"); // set the student name for the user to write!
}
//  Create a method that accepts an assignment name and assignment score and adds a grade object to the grades array.
getGrades () {
    // HINT : use object literal notation to create a grade object in the grade array for each instance of the Student Class
let grade = { // <= THIS is an object literal that holds the assignment name and score for the user to pass in!
    assignmentName: prompt("What is the assignment name?"),
    assignmentScore: prompt("What is the assignment score?"),
}
this.grades.push(`${grade.assignmentName},  ${grade.assignmentScore}`); //push the object into the grades array!
console.log(this.grades) // the array shows up. but shows up as [object Object]

}

print() {
    console.log(`${this.studentName}, ${this.codeSchoolCohort}, ${this.grades}`); // print METHOD

}


}




//    Add one grade object to each instance of the Student Class grade array using the class method.
exercise3 = () => {
let student1 = new Student(" ", " 2021", " " ,  " "); // creates a NEW student.. empty name and two empty assignment objects for the user to fill!
student1.setStudentName(); // calls method
student1.getGrades();// calls method
student1.print();// calls method
let student2 = new Student(" ", "2021", " ", " "); // creates a NEW student.. empty name and two empty assignment objects for the user to fill!
student2.setStudentName();// calls method
student2.getGrades();// calls method
student2.print();// calls method
}

//UNCOMMENT THIS TO CALL FUNCITON!
// exercise3(); // call this function!


// button.addEventListener("click", student1.updateStudentName);

// challenge 1

// Create a Person class with three properties: name, weight, and height. 
// Create a method that can calculate the BMI of a person using the formula below.
//  Create an instance of the class and use the function.


// BMI is  (weight / (height * height)) x 703. Weight is in pounds and height is in inches.


class person {
    constructor(name, weight, height){
        this.name = name; //parameter passed in
        this.weight = weight; //parameter passed in
        this.height = height; //parameter passed in
        // this.BMI = [];
    }
    setName() {
        this.name = prompt("Hello!, what is your name?"); //get the name from the user!
    }
    setWeight() {
        this.weight = prompt(`Welcome ${this.name} ! What is your weight?`) // get the weight from the user
        this.weight = parseInt(this.weight); // change the weight string into an actual INTEGER or NUMBER we can use!!
    }
    setHeight()
    {
        this.height = prompt(`Almost done? What is your Height?`); // get the height from the user
        this.height = parseInt(this.height); // change the height string into an actual INTEGER or NUMBER we can use!!
    }
    getBMI() {
        return (Math.floor(this.weight / (this.height * this.height) * 703)); // MATH calculation!!
        //PRO TIP: Math.floor <= returns the largest integer less than or equal to a given number.. AKA (ROUNDS UP OR DOWN TO A WHOLE NUMBER??)
        
    }
    print(){
        console.log(` Hey, ${this.name}. Your BMI is ${this.getBMI()}`);
    }
}
challenge1 = () => {
let person1 = new person(" ", " ", " ");
person1.setName();
person1.setWeight();
person1.setHeight();
person1.getBMI();
person1.print();
}
//challenge1(); // call this function!











// ### Challenge 2:

// - Prints both accounts
// Create a Bank class with the the name and balance properties. Afterwards, create an instance of the class and follow the instructions below:
class Bank {    
    constructor(name, balance)
    {
        this.name = name;
        this.balance = balance;
    }
    // - Withdraws 100.0 from Matt's account
    withdraw() {
        let number = prompt("How much do you want to withdraw??");
        this.balance = (this.balance - number);
        this.balance = parseInt(this.balance);
        return this.balance;

    }
    // - Deposits 100.0 to My account
    deposit(){
        let number = prompt("How much do you want to deposit?");
        this.balance = (this.balance + number);
        this.balance = parseInt(this.balance);
        return this.balance;
    }
    

}

// - Creates an account named "Matt's account" with the balance of 1000
challenge2 = () => {
let account1 = new Bank ("Matt's Account", 1000);
console.log(account1);
account1.withdraw();
console.log(account1);

// - Creates an account named "My account" with the balance of 0
let account2 = new Bank("My account", 0);
console.log(account2);
account2.deposit();
console.log(account2);
}
challenge2();



