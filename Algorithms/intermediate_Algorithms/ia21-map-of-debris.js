// Intermediate Algorithm Scripting: Map the Debris
function orbitalPeriod(arr) {
    let Arrrg = []
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    for (let i in arr){
      console.log(arr[i].avgAlt)
      let OP = Math.round(Math.sqrt((4*Math.pow(Math.PI,2)*Math.pow(earthRadius+arr[i].avgAlt,3)/GM)));
      arr[i].avgAlt = OP
      Arrrg.push({name:arr[i].name,orbitalPeriod:arr[i].avgAlt})
     }
     return Arrrg
  }
  let r = 6367.4447 + 35873.5553;
  let GM = 398600.4418;
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble"}]))//, avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
  console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))