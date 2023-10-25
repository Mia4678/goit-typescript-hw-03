// Клас Key для створення ключа
class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature(): number {
      return this.signature;
    }
  }
  
  // Клас Person
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  
  // Абстрактний клас House
  abstract class House {
    protected door: boolean;
    private tenants: Person[] = [];
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log("Вітаємо вас у будинку!");
      } else {
        console.log("Двері закриті, ви не можете увійти.");
      }
    }
  
    abstract openDoor(key: Key): void;
  }
  
  // Клас MyHouse успадковується від House
  class MyHouse extends House {
    private key: Key;
  
    constructor(key: Key) {
      super();
      this.key = key;
    }
  
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log("Двері відчинені.");
      } else {
        console.log("Невірний ключ. Двері залишаються закритими.");
      }
    }
  }
  
  // Створення ключа, будинку та людини
  const key = new Key();
  const myHouse = new MyHouse(key);
  const person = new Person(key);
  
  // Відкриття дверей і спроба входу
  myHouse.openDoor(person.getKey());
  myHouse.comeIn(person);