/**
 * @description Pick<T,K>
 * T에서 프로퍼티 K의 집합을 선택해 타입을 구성
 */

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo1, "title" | "completed">;

const todo: TodoPreview = {
  title: "hello",
  completed: false,
};
