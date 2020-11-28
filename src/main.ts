import { option as O } from "fp-ts"
import { flow } from "fp-ts/lib/function"
import { Prism } from "monocle-ts/lib/Prism"
import { prismNonZero } from "newtype-ts/lib/NonZero"
import {
  Credit,
  Debit,
  DoubleIndexedArray,
  JournalEntries,
  JournalTransaction,
  Number,
  Transaction,
} from "./domain"

export declare const isJournalEntries: (a: unknown) => a is JournalEntries

export const isDoubleIndexedArray = (
  a: unknown
): a is DoubleIndexedArray<unknown> =>
  Array.isArray(a) && a[0] !== undefined && a[1] !== undefined

export declare const tToJournalTransaction: (
  transaction: Transaction
) => JournalTransaction

export const prismNumber: Prism<number, Number> = prismNonZero

export const debit: (number: number) => O.Option<Debit> = flow(
  prismNumber.getOption,
  O.bindTo("DR")
)

export const credit: (number: number) => O.Option<Credit> = flow(
  prismNumber.getOption,
  O.bindTo("CR")
)
