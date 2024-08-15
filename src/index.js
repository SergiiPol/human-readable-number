module.exports = // src/index.js
    function toReadable(number) {
        const units = [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
        ];

        const teens = [
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ];

        const tens = [
            "",
            "",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ];

        const hundreds = [
            "one hundred",
            "two hundred",
            "three hundred",
            "four hundred",
            "five hundred",
            "six hundred",
            "seven hundred",
            "eight hundred",
            "nine hundred",
        ];

        if (number < 10) {
            return units[number];
        }

        if (number >= 10 && number < 20) {
            return teens[number - 10];
        }

        if (number >= 20 && number < 100) {
            const ten = Math.floor(number / 10);
            const unit = number % 10;
            return unit === 0 ? tens[ten] : `${tens[ten]} ${units[unit]}`;
        }

        if (number >= 100 && number < 1000) {
            const hundred = Math.floor(number / 100);
            const remainder = number % 100;

            if (remainder === 0) {
                return hundreds[hundred - 1];
            } else if (remainder < 10) {
                return `${hundreds[hundred - 1]} ${units[remainder]}`;
            } else if (remainder >= 10 && remainder < 20) {
                return `${hundreds[hundred - 1]} ${teens[remainder - 10]}`;
            } else {
                const ten = Math.floor(remainder / 10);
                const unit = remainder % 10;
                return unit === 0
                    ? `${hundreds[hundred - 1]} ${tens[ten]}`
                    : `${hundreds[hundred - 1]} ${tens[ten]} ${units[unit]}`;
            }
        }

        return "";
    };
