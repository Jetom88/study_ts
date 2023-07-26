/**
 * @description Omit<T,K>
 * T에서 모든 프로퍼티를 선택한 다음 K를 제거한 타입을 구성
 */

interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview1 = Omit<Todo2, "description">;

const todo3: TodoPreview1 = {
  title: "test",
  completed: false,
};
