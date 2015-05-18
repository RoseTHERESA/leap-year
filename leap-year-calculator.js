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

module.exports = {

	calculate: function() {
		var result, year;
		if (year/400) {
			result = true;
		}

		else if(year/100) {
			result = false;	
		}

		else if(year/4) {
			result = true
		}
		return result
	},
};


