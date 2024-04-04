class Instructor {
    constructor({ name, role = "assistant" }) {
      this.role = role;
      this.name = name;
    }
    // Base case static method
    static helloWorld() {
      console.log('Hi there');
    }
  
    // Static method
    static canTeach(instructor) {
      return (instructor.role === 'classroom'); //True si coindice que role es classroom, de lo contrario false
    }

      // "Alice can teach: true"
    static teachStatic(obj) {
        console.log(
            `${obj.name} can teach: ${Instructor.canTeach(obj)}` // Utilizo la clase para llamar al método startico
        );
    }

          // "Alice can teach: true"
    teach() {
        console.log(`${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}` // Utilizo la clase para llamar al método startico
            );
    }
  }
  
  let juniorInstructor = new Instructor({ 'name' : 'Brian' });
  let seniorInstructor = new Instructor({ 'name' : 'Alice', "role" : "classroom" });
  Instructor.teachStatic(juniorInstructor);
  seniorInstructor.teach();


