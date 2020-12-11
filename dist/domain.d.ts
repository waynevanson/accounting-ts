import { Newtype } from "newtype-ts";
import { NonZero } from "newtype-ts/lib/NonZero";
/**
 * @summary
 * A limitless (by javascript's terms) number that should not equal the following:
 * - `0`
 * - `Infinity`
 * - `NaN`
 *
 * @todo Allow for numbers greater than what javascript's number type can handle.
 * @todo decimal should be between 0 and 99
 */
export declare type Number = [NonZero, NonZero];
export declare type Debit = Record<"DR", Number>;
export declare type Credit = Record<"CR", Number>;
export declare type EntryAmount = Debit | Credit;
export declare type CashReceipt = {
    Date: Date;
    from: string;
    amount: Number;
    to: string;
    description: string;
    identifier: string;
};
export declare type SourceDocument = CashReceipt;
/**
 * @summary
 * An entry into that would be used in a journal, such as the general journal.
 */
export interface Entry {
    date: Date;
    account: string;
    amount: EntryAmount;
}
export declare type DoubleIndexedArray<A> = [A, A, ...A[]];
/**
 * @summary
 * The data (source of truth) for the transaction, which consists of
 * multiple entries.
 *
 * Always has a minimum of two entries that BALANACE
 *
 * @todo validate balance effect of transaction
 */
export interface Transaction extends Newtype<{
    readonly Transaction: unique symbol;
}, DoubleIndexedArray<Entry>> {
}
export interface JournalEntry {
    account: string;
    amount: EntryAmount;
}
export interface JournalEntries extends Newtype<{
    readonly JournalTransaction: unique symbol;
}, DoubleIndexedArray<JournalEntry>> {
}
export interface JournalTransaction {
    date: Date;
    description: string;
    entries: JournalEntries;
}
export declare type Journal = {
    transactions: Array<JournalTransaction>;
};
export interface SingleEntryLedger {
    date: Date;
    accounts: string;
    amount: EntryAmount;
}
export interface DoubleEntryLedger extends Record<"debit" | "credit", {
    date: Date;
    accounts: string;
    amount: Number;
}> {
}
export declare type BalanceSheet = {};
export declare type ProfitAndLossStatement = {};
export declare type TrialBalance = {};
export declare type Reports = BalanceSheet | ProfitAndLossStatement;
export interface ChartOfAccount {
    id: number;
}
