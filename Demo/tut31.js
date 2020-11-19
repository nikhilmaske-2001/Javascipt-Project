const tut = 31;
console.log("This is tut "+ tut);

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan() {
        return `This company is the best`;
    }

    joiningYear() {
        return  2020-this.experience;
    }

    static add(a, b) {
        return a+b;
    }
};

// Nikhil = new Employee("Nikhil", 19, "Division");
// console.log(Nikhil.joiningYear());
// console.log(Employee.add(19, 1));

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage(){
        if(this.language == 'Python'){
            return 'Python';
        }
        else{
            return 'Javascipt';
        }
    }

    static muliply(a, b){
        return a*b;
    }
}

rohan = new Programmer('Rohan', 4, 'Lays', 'Go', 'Rohan420');
console.log(rohan);
console.log(rohan.favoriteLanguage());
console.log(Programmer.muliply(5, 7));