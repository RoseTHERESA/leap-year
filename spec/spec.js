/*
leap-year calendar:
every year whose number is perfectly divisible by four is a leap year,
except for years which are both divisible by 100 and not divisible by 400.
1600 and 2000 are leap years, but the century years 1700, 1800, and 1900 are not.

Start by identifying a bunch of test cases
Write a test
Make it pass
Write a test
Make it pass
Repeat a bunch of times

*/

var calc = require("../leap-year-calculator.js")

describe("Leap Year Calculator", function() {

	it("should return true for all years divisible by 400", function() {
		expect(calc.calculate(900)).toBe(false)
		expect(calc.calculate(800)).toBe(true)
	});

	it("should return false for all remaining years divisble by 100", function() {
		expect(calc.calculate (900)).toBe(false)
		expect(calc.calculate (2300)).toBe(false)
	});

	it('should return true for all remaining multiples of 4', function() {
		expect(calc.calculate(4)).toBe(true)
		expect(calc.calculate(2004)).toBe(true)
	});
	xit('should return false for all remaining years', function() {
		expect(calc.calculate(999)).toBe(false)
	});
});