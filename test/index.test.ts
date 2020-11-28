import { option } from "fp-ts"
import { credit, debit, isDoubleIndexedArray } from "../src"

describe("", () => {
  test("credit", () => {
    expect(credit(2)).toMatchObject(option.some({ CR: 2 }))
  })

  test("debit", () => {
    expect(debit(2)).toMatchObject(option.some({ DR: 2 }))
  })

  describe("isDoubleIndexedArray", () => {
    test("more than two elements", () => {
      expect(isDoubleIndexedArray([1, 1, 1])).toBeTruthy()
    })
    test("two elements", () => {
      expect(isDoubleIndexedArray([1, 1])).toBeTruthy()
    })
    test("one elements", () => {
      expect(isDoubleIndexedArray([1])).toBeFalsy()
    })
    test("zero elements", () => {
      expect(isDoubleIndexedArray([])).toBeFalsy()
    })
    test("not an array", () => {
      expect(isDoubleIndexedArray(1)).toBeFalsy()
    })
  })
})
