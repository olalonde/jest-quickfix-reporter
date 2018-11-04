test('this will throw', () => {
  throw new Error()
})

test("this will pass", () => {
  expect(true).toBeTruthy()
})

describe('some describe title', () => {
  test("this will fail", () => {
    expect(false).toBeTruthy()
  })
})