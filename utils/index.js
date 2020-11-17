var subStr = function (val, start, stop) {
  if (val) {
    return val.substring(start, stop)
  } else {
    return ''
  }
}

var subDate = function (val) {
  if (val) {
    return val.substring(0, 10)
  } else {
    return ''
  }
}

module.exports = {
  subStr: subStr,
  subDate: subDate
};