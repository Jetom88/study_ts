/**
 * @description Readonly<T>
 * T의 모든 프로퍼티를 읽기 전용으로 설정한 타입을 구성한다.
 * 즉 재할당 할 수 없음
 */

// readonly는 선언된 변수가 없더라도 type을 미리 정의할 때 사용 가능
// as const는 무조건 변수와 세트여야 함

type Structure = { readonly a: string };
const a: Structure = { a: "tset" };
const b: Structure = { a: "tset123" };

const myObject: { readonly name: string; age: number } = { name: "John", age: 30 };

const obj = { name: "John", age: 30 } as const;

// myObject.name = "Jane";
// obj.name = "testT";
