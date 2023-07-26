function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}`;
  } else {
    return `Hello, ${name}!`;
  }
}
