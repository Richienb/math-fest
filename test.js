const mathFest = require(".")
const test = require("ava")
const forOwn = require("for-own")

test("main", (t) => {
	forOwn(mathFest, (val) => {
		t.is(typeof val, "number")
	})
})
