import { sum } from "../sum";

test("sum function should add", () => {
  const result = sum(3, 5);
  expect(result).toBe(8);
});
