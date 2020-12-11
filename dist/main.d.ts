import { option as O, show as SH } from "fp-ts";
import { Prism } from "monocle-ts/lib/Prism";
import { Credit, Debit, DoubleIndexedArray, JournalEntries, JournalTransaction, Number, Transaction } from "./domain";
export declare const showNumber: SH.Show<Number>;
export declare const isJournalEntries: (a: unknown) => a is JournalEntries;
export declare const isDoubleIndexedArray: (a: unknown) => a is DoubleIndexedArray<unknown>;
export declare const tToJournalTransaction: (transaction: Transaction) => JournalTransaction;
export declare const prismNumber: Prism<number, Number>;
export declare const debit: (number: number) => O.Option<Debit>;
export declare const credit: (number: number) => O.Option<Credit>;