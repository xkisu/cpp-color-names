const fs = require('fs')
const path = require('path')

const colors = require('./colors.json')

const totalColors = Object.keys(colors).length

let template = fs.readFileSync('./template.h', {
  encoding: 'utf8'
})

template = template.replace('{{COLOR_COUNT}}', totalColors)

let enumvalues = ''
let mapvalues = ''
let namemapvalues = ''

for (var colorid in colors) {
  if (!colors.hasOwnProperty(colorid)) continue;

  const enumname = colorid.toUpperCase()
  const rgb = colors[colorid].rgb

  enumvalues += `    ${enumname},\n`
  mapvalues += `    {ColorName::${enumname}, ColorValues{${rgb[0]}, ${rgb[1]}, ${rgb[2]}}},\n`
  namemapvalues += `    {"${colorid}", ColorName::${enumname}},\n`
}

template = template.replace('{{COLOR_ENUM}}', enumvalues.trim().replace(/(,$)/g, ""))
template = template.replace('{{COLOR_MAP}}', mapvalues.trim().replace(/(,$)/g, ""))
template = template.replace('{{COLOR_NAME_MAP}}', namemapvalues.trim().replace(/(,$)/g, ""))

fs.writeFileSync('./out.h', template)