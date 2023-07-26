const user = {
  name: "John",
  age: 25,
};

//string에 number가 할당되면 컴파일 시점에서 오류가 발생
const user2: { name: string; age: number } = {
  name: " John", // 4로 할당될 경우 Error
  age: 25,
};
