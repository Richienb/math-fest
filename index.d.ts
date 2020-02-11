/**
 * A collection of mathematical constants.
 * @example
 * ```
 * const { pi, e, golden } = require("math-fest");
 *
 * console.log(pi)
 * //=> 3.141592653589793
 *
 * console.log(e)
 * //=> 2.718281828459045
 *
 * console.log(golden)
 * //=> 1.618033988749895
 * ```
*/
declare const mathFest: {
	/** Archimedes' constant */
	pi: number

	/** Euler's number */
	e: number

	/** Pythagoras' constant √2 */
	root2: number

	/** The Feigenbaum constant α */
	a: number

	/** The Feigenbaum constant δ */
	o: number

	/** Apéry's constant */
	ay: number

	/** The golden ratio */
	golden: number

	/** The Euler–Mascheroni constant */
	em: number

	/** Conway's constant */
	cw: number

	/** Khinchin's constant */
	kh: number

	/** The Glaisher–Kinkelin constant */
	gk: number

	/** Chaitin's constant */
	ch: number
}

export = mathFest
