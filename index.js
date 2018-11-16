let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;
let end = new Date('11/30/2018 11:59 PM');
let timer = null;
let show = () => {
  let now = new Date();
  let di = end-now;
  let da = Math.floor(di/_day);
  let h = Math.floor((di%_day)/_hour);
  let m = Math.floor((di%_hour)/_minute);
  let k = Math.floor((di%_minute)/_second);
  document.getElementById("countdown").innerHTML="Time left: "+ da+" days "+h+" hours "+m+" minutes "+k+" seconds";
  let ht = "time left: " + da + " days " + h + " hours " + m + " minutes " + k + " seconds";
  return ht;
}
timer = setInterval(show, 1000);
show();
