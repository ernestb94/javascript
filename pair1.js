var hour;
var minute;
var stringDay;
var tens = ["ten", "twenty", "thirty", "forty", "fifty"];
var units = ["oh", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var exceptions = ["eleven", "twelve", "thirteen", "fourteen","fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var stringH;
var stringM;
var stringFinal;

function convert(){
  hour = document.getElementById("hour").value;	
  minute = document.getElementById("minute").value;
  if (hour < 12){
   stringDay = "am";
  }
  else{
   	stringDay = "pm";
  }
  switch(hour){
  	case "00":
    stringH = exceptions[1];
    break;
    case "01":
    stringH = units[1];
    break;
    case "02":
    stringH = units[2];
    break;
    case "03":
    stringH = units[3];
    break;
    case "04":
    stringH = units[4];
    break;
    case "05":
    stringH = units[5];
    break;
    case "06":
    stringH = units[6];
    break;
    case "07":
    stringH = units[7];
    break;
    case "08":
    stringH = units[8];
    break;
    case "09":
    stringH = units[9];
    break;
    case "10":
    stringH = tens[0];
    break;
    case "11":
    stringH = exceptions[0];
    break;
    case "12":
    stringH = exceptions[1];
    break;
    case "13":
    stringH = units[1];
    break;
    case "14":
    stringH = units[2];
    break;
    case "15":
    stringH = units[3];
    break;
    case "16":
    stringH = units[4];
    break;
    case "17":
    stringH = units[5];
    break;
    case "18":
    stringH = units[6];
    break;
    case "19":
    stringH = units[7];
    break;
    case "20":
    stringH = units[8];
    break;
    case "21":
    stringH = units[9];
    break;
    case "22":
    stringH = tens[0];
    break;
    case "23":
    stringH = exceptions[0];
    break;
    default:
    stringH = "please input the correct value";
	}
    
    switch(minute){
  	case "00":
    stringM = exceptions[1];
    break;
    case "01":
    stringM = units[1];
    break;
    case "02":
    stringM = units[2];
    break;
    case "03":
    stringM = units[3];
    break;
    case "04":
    stringM = units[4];
    break;
    case "05":
    stringM = units[5];
    break;
    case "06":
    stringM = units[6];
    break;
    case "07":
    stringM = units[7];
    break;
    case "08":
    stringM = units[8];
    break;
    case "09":
    stringM = units[9];
    break;
    case "10":
    stringM = tens[0];
    break;
    case "11":
    stringM = exceptions[0];
    break;
    case "12":
    stringM = exceptions[1];
    case "13":
    stringM = exceptions[2];
    break;
    case "14":
    stringM = exceptions[3];
    break;
    case "15":
    stringM = exceptions[4];
    break;
    case "16":
    stringM = exceptions[5];
    break;
    case "17":
    stringM = exceptions[6];
    break;
    case "18":
    stringM = exceptions[7];
    break;
    case "19":
    stringM = exceptions[8];
    break;
    case "20":
    stringM = tens[1];
    break;
    case "21":
    stringM = tens[1]+" "+units[1];
    break;
    case "22":
    stringM = tens[1]+" "+units[2];
    break;
    case "23":
    stringM = tens[1]+" "+units[3];
    break;
    case "24":
    stringM = tens[1]+" "+units[4];
    break;
    case "25":
    stringM = tens[1]+" "+units[5];
    break;
    case "26":
    stringM = tens[1]+" "+units[6];
    break;
    case "27":
    stringM = tens[1]+" "+units[7];
    break;
    case "28":
    stringM = tens[1]+" "+units[8];
    break;
    case "29":
    stringM = tens[1]+" "+units[9];
    break;
    case "30":
    stringM = tens[2];
    break;
    case "31":
    stringM =   tens[2]+" "+units[1];
    break;
    case "32":
    stringM = tens[2]+" "+units[2];
    break;
    case "33":
    stringM = tens[2]+" "+units[3];
    break;
    case "34":
    stringM = tens[2]+" "+units[4];
    break;
    case "35":
    stringM = tens[2]+" "+units[5];
    break;
    case "36":
    stringM = tens[2]+" "+units[6];
    break;
    case "37": 
    stringM = tens[2]+" "+units[7];
    break;
    case "38":
    stringM = tens[2]+" "+units[8];
    break;
    case "39":
    stringM = tens[2]+" "+units[9];
    break;
    case "40":
    stringM = tens[3];
    break;
    case "41":
    stringM = tens[3]+" "+units[1];
    break;
    case "42":
    stringM = tens[3]+" "+units[2];
    break;
    case "43":
    stringM = tens[3]+" "+units[3];
    break;
    case "44":
    stringM = tens[3]+" "+units[4];
    break;
    case "45":
    stringM = tens[3]+" "+units[5];
    break;
    case "46":
    stringM = tens[3]+" "+units[6];
    break;
    case "47":
    stringM = tens[3]+" "+units[7];
    break;
    case "48":
    stringM = tens[3]+" "+units[8];
    break;
    case "49":
    stringM = tens[3]+" "+units[9];
    break;
    case "50":
    stringM = tens[4];
    break;
    case "51":
    stringM = tens[4]+" "+units[1];
    break;
    case "52":
    stringM = tens[4]+" "+units[2];
    break;
    case "53":
    stringM = tens[4]+" "+units[3];
    break;
    case "54":
    stringM = tens[4]+" "+units[4];
    break;
    case "55":
    stringM = tens[4]+" "+units[5];
    break;
    case "56":
    stringM = tens[4]+" "+units[6];
    break;
    case "57":
    stringM = tens[4]+" "+units[7];
    break;
    case "58":
    stringM = tens[4]+" "+units[8];
    break;
    case "59":
    stringM = tens[4]+" "+units[9];
    break;
    default:
    stringH = "please input the correct value";
	}

	stringFinal = stringH + " : " + stringM + " " + stringDay;
	document.getElementById("output").value = stringFinal;

}