// 원시 데이터 타입 별칭 사용
type Age = number;
const myAge: Age = 30;

// Array
type Names = string[];
const myFriends: Names = ["Alice", "Bob", "Charlie"];

// Tuple
type Coordinates = [number, number];
const myLocation: Coordinates = [37.7749, -122.4194];

// Object
type User = {
  id: string;
  name: string;
  age: number;
};
const user1: User = { id: "1", name: "John Doe", age: 28 };

// function
type GreetingFunction = (name: string) => string;
const greet1: GreetingFunction = (name) => `Hello, ${name}`;

// multiple
type UserID = string;
type UserName = string;
type Age1 = number;

type User1 = {
  id: UserID;
  name: UserName;
  age: Age;
};

const user3: User1 = { id: "1", name: "John Doe", age: 28 };
