// don't overgeneralize entries and transactions

import { Newtype } from "newtype-ts"
import { NonZero } from "newtype-ts/lib/NonZero"

/**
 * @summary
 * A limitless (by javascript's terms) number that should not equal the following:
 * - `0`
 * - `Infinity`
 * - `NaN`
 *
 * @todo Allow for numbers greater than what javascript's number type can handle.
 */
export type Number = NonZero

export type Debit = Record<"DR", Number>
export type Credit = Record<"CR", Number>
export type EntryAmount = Debit | Credit

/**
 * @summary
 * An entry into that would be used in a journal, such as the general journal.
 */
export interface Entry {
  date: Date
  account: string
  amount: EntryAmount
}

export type DoubleIndexedArray<A> = [A, A, ...A[]]

/**
 * @summary
 * The data (source of truth) for the transaction, which consists of
 * multiple entries.
 *
 * Always has a minimum of two entries that BALANACE
 *
 * @todo validate balance effect of transaction
 */
export interface Transaction
  extends Newtype<
    { readonly Transaction: unique symbol },
    DoubleIndexedArray<Entry>
  > {}

export interface JournalEntry {
  account: string
  amount: EntryAmount
}

// sort by DR/CR, pairs (GST last for example)
// enforce date is the same between this and all transactions.
export interface JournalEntries
  extends Newtype<
    { readonly JournalTransaction: unique symbol },
    DoubleIndexedArray<JournalEntry>
  > {}

export interface JournalTransaction {
  date: Date
  description: string
  entries: JournalEntries
}

export type Journal = {
  transactions: Array<JournalTransaction>
}

export interface SingleEntryLedger {
  date: Date
  accounts: string
  amount: EntryAmount
}

export interface DoubleEntryLedger
  extends Record<
    "debit" | "credit",
    { date: Date; accounts: string; amount: Number }
  > {}

export type BalanceSheet = {}
export type ProfitAndLossStatement = {}
export type TrialBalance = {}

export type Reports = BalanceSheet | ProfitAndLossStatement

export interface ChartOfAccount {
  id: number
}
