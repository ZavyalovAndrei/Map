import { ErrorRepository } from "../ErrorRepository.js";

test.each([
  ["I'm a teapot", 418],
  ["Unknown error", 474],
  ["Unknown error", "404"],
  ["Unknown error", -200],
])(
  "should return %s when the code is %s",
  ((expected, code) => {
    const repository = new ErrorRepository();
    const result = repository.translate(code);
    expect(result).toEqual(expected);
  })
);