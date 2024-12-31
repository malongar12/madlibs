const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

test("positive integers", () => {
  expect(addCommas(1234)).toBe("1,234");
  expect(addCommas(1000000)).toBe("1,000,000");
  expect(addCommas(9876543210)).toBe("9,876,543,210");
});


test("negative integers", () => {
  expect(addCommas(-10)).toBe("-10");
  expect(addCommas(-5678)).toBe("-5,678");
  expect(addCommas(-9876543210)).toBe("-9,876,543,210");
});


test("small numbers", () => {
  expect(addCommas(6)).toBe("6");
  expect(addCommas(123)).toBe("123");
});


test("decimal numbers ", () => {
  expect(addCommas(12345.678)).toBe("12,345.678");
  expect(addCommas(-3141592.65)).toBe("-3,141,592.65");
});

test("it doesn't add commas to numbers without thousands", () => {
  expect(addCommas(123)).toBe("123");
  expect(addCommas(6)).toBe("6");
});


test("it formats very large numbers correctly", () => {
  expect(addCommas(1234567890123456)).toBe("2,234,567,456");
});
