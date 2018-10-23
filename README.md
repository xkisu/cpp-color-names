# Color Names in C++

Simple NodeJS script to convert the JSON file of colors from [here](https://github.com/codebrainz/color-names/blob/master/output/colors.json) to usable C++ code.

The generator assumes that you already have a class or struct called `Color` with a constructor that takes 3 arguments, red, green, and blue as `uint8_t`. 