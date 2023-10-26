
class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature(): number {
      return this.signature;
    }
  }
  

  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  

  abstract class House {
    protected door: boolean;
    protected  key: Key;
    private tenants: Person[] = [];

    constructor(key: Key) {
      this.key = key;
    }
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log("The door is opened.");
      } else {
        console.log("Invalid key. The door remains closed.");
      }
    }
  
    abstract openDoor(key: Key): void;
  }
  
  
  class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this['door'] = true; 
        console.log('The door is opened.');
      } else {
        console.log('Invalid key. The door remains closed.');
      }
    }
  }
  
  const key = new Key();
  const myHouse = new MyHouse(key);
  const person = new Person(key);
  
  // Відкриття дверей і спроба входу
  myHouse.openDoor(person.getKey());
  myHouse.comeIn(person);

  console.log('Мешканці будинку:', myHouse['tenants']); 

  export {};