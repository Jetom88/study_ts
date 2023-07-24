interface Shape {
  getArea(): number; // getArea라는 함수가 꼭 있어야하고 반환 값은 number
}

//implements -> 해당 클래스가 Shape interface 조건을 충족하겠다고 명시
class TestComp implements Shape {
  //radius 값을 설정
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  //너비 가져오는 함수 구현
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Ractangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const shapes: Shape[] = [new TestComp(5), new Ractangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
