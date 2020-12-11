import { either as E } from "fp-ts";
import { identity, pipe } from "fp-ts/lib/function";
import * as de from "io-ts/DecodeError";
import * as fsg from "io-ts/FreeSemigroup";
export var date = {
    decode: E.fromPredicate(function (a) { return a instanceof Date; }, function (a) { return pipe(de.leaf(a, ""), fsg.of); }),
    encode: identity
};
//# sourceMappingURL=codecs.js.map