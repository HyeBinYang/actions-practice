const factorial = require("../src/index");

describe("Factorial 함수", () => {
  it("양수일 때 제대로된 값이 출력", () => {
    expect(factorial(3)).toBe(6);
  });

  it("음수 일 때는 에러가 발생", () => {
    expect(() => {
      factorial(-1);
    }).toThrow("음수는 안됩니다!");
  });

  it("0일 때는 어떨까?", () => {
    expect(() => {
      factorial(0);
    }).toBe(1);
  });
});
