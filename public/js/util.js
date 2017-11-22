
// display unit to won
function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// convert unit(thousand to ten thousand) using round
function convertUnit(number) { 
    var n = 10;
    var new_number = 0;
    new_number = number / n;
    new_number = Math.round(new_number);
    new_number = new_number * n;
    return new_number/10;
}


var tDic = {
    "국회": "National Assembly",
    "국회의원": "Congressperson",
    "정부": "Government",
    "병원장": "Hospital Director",
    "법원": "Court",
    "부장판사": "Senior Judge",
    "구청장": "Head of District",
    "원장": "President",
    "의장": "Chairperson",
    "총장": "President",
    "의원": "Congressperson",
    "국정과제비서관": "Secretary of National Task",
    "원로법관": "Senior Judge",
    "본부장": "General Manager",
    "군수": "County Governor",
    "경제부지사": "Vice Govenor of Economics",
    "위원": "Member",
    "부총장": "Vice President",
    "부원장": "Vice President",
    "일반직고위공무원": "High-ranking Official"
}

function t(ko_name) {
    if (tDic[ko_name] == undefined){
        return ko_name;
    } else {
        return tDic[ko_name];
    }
}

function abbreviateNumber(num, fixed) {
  if (num === null) { return null; } // terminate early
  if (num === 0) { return '0'; } // terminate early
  fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
  var b = (num).toPrecision(2).split("e"), // get power
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
      c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed), // divide by power
      d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
      e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
  return e;
}

function abbreviateNumberOnly(num, fixed) {
  if (num === null) { return null; } // terminate early
  if (num === 0) { return '0'; } // terminate early
  fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
  var b = (num).toPrecision(2).split("e"), // get power
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
      c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed), // divide by power
      d = c < 0 ? c : Math.abs(c); // enforce -0 is 0
  return d;
}

function abbreviateNumberUnit(num, fixed) {
  if (num === null) { return null; } // terminate early
  if (num === 0) { return '0'; } // terminate early
  fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
  var b = (num).toPrecision(2).split("e"), // get power
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
      c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed), // divide by power
      d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
      e = ['', 'K', 'M', 'B', 'T'][k]; // append power
  return e;
}
