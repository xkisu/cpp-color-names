#ifndef CPP_COLOR_NAMES
#define CPP_COLOR_NAMES

#include <string>
#include <map>
#include <cstdint>

#define COLOR_NAMES_MAX {{COLOR_COUNT}}

struct ColorValues {
  uint8_t r;
  uint8_t g;
  uint8_t b;
};

enum class ColorName : int {
{{COLOR_ENUM}}
};

const std::map<ColorName, ColorValues> ColorMap = {
{{COLOR_MAP}}
};

const std::map<std::string, ColorName> ColorNameMap = {
{{COLOR_NAME_MAP}}
};

#endif