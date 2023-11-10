//제너릭을 사용하지 않고 any를 쓰면 함수의 인자로 어떤 타입이 들어가고 어떤 타입을 반환해야하는지 알 수 없음
function textFc(text: any): any {
  console.log(text);
  return text;
}

//어떤 타입을 받을 건지 정의
//params 타입으로 정의
function textFc2<T>(text: T): T {
  console.log(text);
  return text;
}

//호출시 타입 정의
//이 경우 string으로 정의했으므로 split 가능
const str = textFc2<string>("a");
str.split(" ");

interface IShoppingItem {
  name: string;
  price: number;
  stock: number;
}

//IShoppingItem에 있는 키 중 한 가지가 T가 됨 = 함수는 'name" | 'price' | 'stock'만 쓸 수 있음
//union보다 나은듯?
function getShoppingItemOption<T extends keyof IShoppingItem>(item: T): T {
  return item;
}

//함수 표현식에서의 generic 사용법
const generic = <T>(text: T): T => {
  return text;
};
