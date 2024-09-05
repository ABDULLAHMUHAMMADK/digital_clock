let hr = document.getElementById("hr");
let mn = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let x = new Date();

  let ss = x.getSeconds();
  let mm = x.getMinutes();
  let hh = x.getHours();

  hr.textContent = (hh < 10 ? "0" : "") + hh;
  mn.textContent = (mm < 10 ? "0" : "") + mm;
  sec.textContent = (ss < 10 ? "0" : "") + ss;
}, 1000);
