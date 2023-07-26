/**
 * @description Partial<T>
 * T의 모든 프로퍼티를 선택적으로 만드는 타입을 구성한다.
 * 주어진 타입의 모든 하위 타입 집합을 나타내는 타입을 반환
 */

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "hello",
  description: "hh",
};

const todo2 = updateTodo(todo1, {
  description: "ho?",
});
