import { either as E } from "fp-ts"
import { identity, pipe } from "fp-ts/lib/function"
import * as c from "io-ts/Codec"
import * as de from "io-ts/DecodeError"
import * as fsg from "io-ts/FreeSemigroup"

export const date: c.Codec<unknown, Date, Date> = {
  decode: E.fromPredicate(
    (a): a is Date => a instanceof Date,
    (a) => pipe(de.leaf(a, ""), fsg.of)
  ),
  encode: identity,
}
