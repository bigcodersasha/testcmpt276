var idTrackerWR = 1;
var idTrackerII = 1;

var idName1 = "weight";
var idName2 = "input";
var idName3 = "result";
var numRows = 1;

for (let i=0; i<4; i++)
{
addRow();
}

//function myFunction() {
 // alert("a");
//}

  function addRow() {
    console.log("idTracker: " + idTrackerII);
    console.log("Adding Row.")

    var rowTracker = numRows;
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var cellName = row.insertCell(0);
    var cellSName = row.insertCell(1);
    var cellWeight = row.insertCell(2);
    var cellGrade = row.insertCell(3);
    var cellPercent = row.insertCell(4); //Creates the cells

    console.log("Row cells inserted.")
    var weightElement = document.createElement("input");
    weightElement.id= idName1 + idTrackerWR; //makes the input element for weight, gives it a class
    weightElement.type="number";
    weightElement.setAttribute("value", "");
    weightElement.style.width="50px";

    console.log("weighth element id: " + weightElement.id);

    var Grade1 = document.createElement("input");
    Grade1.id= idName2 + idTrackerII;
    Grade1.type = "number"
    Grade1.setAttribute("value", "");
    Grade1.style.width="50px"; //makes the input element for per1, gives it a class
    Grade1.setAttribute("oninput", "Percentage()");
    console.log("grade1 element id:" + Grade1.id);

    var percentResult = document.createElement('p');
    percentResult.id = idName3 + idTrackerWR;

    console.log("id tracker " + idTrackerII);

    idTrackerII++;
    var Grade2 = document.createElement("input");
    Grade2.id=idName2 + idTrackerII;
    Grade2.type = "number"
    Grade2.setAttribute("value", "");
    Grade2.setAttribute("oninput", "Percentage()");
    Grade2.style.width="50px";

    let divString = document.createTextNode("/");

    console.log("Created the three input types");


    cellName.innerHTML="Activity" + " " + idTrackerWR;
    cellSName.innerHTML="A" + "" + idTrackerWR;
    cellWeight.appendChild(weightElement);
    cellGrade.appendChild(Grade1);
    cellGrade.appendChild(divString);
    cellGrade.appendChild(Grade2);
    cellPercent.appendChild(percentResult);

    console.log("Appended all types into row cells.");

    console.log(Grade1.id);
    console.log(Grade2.id);
    console.log(percentResult.id);
    console.log("numRows is " + rowTracker);
    //document.getElementById(Grade1.addEventListener("oninput", Percentage());
    //document.getElementById(Grade2.addEventListener("oninput", Percentage());
    console.log("Added oninput event listeners to grade1/grade2");
    //document.getElementById(numRows).oninput = ((a/b)*100).toFixed(2) + "%";
    console.log("id tracker: " + idTrackerII);
    idTrackerII++;
    idTrackerWR++;
    console.log("number of rows: "+ numRows);
    numRows++;
}

function Percentage() {
  console.log("there are " + numRows);
  var x = 1;
  for (let q=0; q<numRows-1; q++) {
    var z = x*2;
    var y = z-1;
    console.log(idName2+y);
    console.log(idName2+z);
    let a = document.getElementById(idName2+y).value;
    let b = document.getElementById(idName2+z).value;
    console.log(a);
    console.log(b);
    console.log(idName3+x);
    document.getElementById(idName3+x).innerHTML = ((a/b)*100).toFixed(2) + "%"; 
    x++;
  }
}

function weightedMean() {
console.log("there are like " + numRows);
var x = 1;
var sum=0;
var weightSum=0;

for (let q=0; q<numRows-1; q++) {
  var z = x*2;
  var y = z-1;

  console.log(idName1+x);
  console.log(idName2+y);
  console.log(idName2+z);
  console.log(idName3+x);

  let a = document.getElementById(idName2+y).value;
  let b = document.getElementById(idName2+z).value;
  let c = document.getElementById(idName1+x).value;

  console.log("a: " + a);
  console.log("b: " + b);
  console.log("c: " + c);
  console.log("sum: " + sum);
  console.log("weightSum: " + weightSum);


  var addingWeight = (c*1).toFixed(0);
  if (isNaN(addingWeight)){
    addingWeight = 0;
  }

  var adding = (c*(a/b)).toFixed(2);
  if (isNaN(adding)){
    adding = 0;
  }
  console.log("adding: " + adding);
  console.log("addingWeight: " + addingWeight);
  console.log("sum: " + sum);
  if (b>0){
  sum = parseFloat(sum) + parseFloat(adding);
  weightSum = parseFloat(weightSum) + parseFloat(addingWeight);
  }
  console.log("sum new: "+ sum);
  console.log("weightSum new: " + weightSum);
  x++;
  } 
  document.getElementById("meanResults").innerHTML = (sum/weightSum).toFixed(2);
}

function Mean() {
  console.log("there are like " + numRows);
  var x = 1;
  var sum=0;
  var meanSum=0;
  
  for (let q=0; q<numRows-1; q++) {
    var z = x*2;
    var y = z-1;
  
    console.log(idName2+y);
    console.log(idName2+z);
    console.log(idName3+x);
  
    let a = document.getElementById(idName2+y).value;
    let b = document.getElementById(idName2+z).value;
  
    console.log("a: " + a);
    console.log("b: " + b);
    console.log("sum: " + sum);
    console.log("meanSum: " + meanSum);
  
    var adding = ((a/b)).toFixed(2);
    if (isNaN(adding)){
      adding = 0;
    }
    
    console.log("adding: " + adding);
    console.log("sum: " + sum);
    if (b>0){
    sum = parseFloat(sum) + parseFloat(adding);
    console.log("sum new: "+ sum);
    console.log("B IS LIKE: "+ b);
    meanSum++;
    }
    console.log("meanSum new: " + meanSum);
    x++;
    } 
    document.getElementById("meanResults").innerHTML = (sum/meanSum).toFixed(2);
  }
  
  
  
  //console.log("input 1: " + idName2 + idTracker);
  //console.log("input 2: " + idName2 + (idTracker+1));
  //var a = document.getElementById(idName2+idTracker).value;
  //var b = document.getElementById(idName2+(idTracker+1)).value;

  //console.log(idName3+idTracker);
  //document.getElementById(idName3+idTracker).innerHTML = ((a/b)*100).toFixed(2) + "%";
  //c//onsole.log("Check 5");
  //var a = document.getElementsByClassName("percentInput1").value;
  //console.log(a);
  //console.log("Check 6");
  //var b = document.getElementsByClassName("percentInput2").value;
  //document.getElementsByClassName("percentResult").oninput = (a+b);
  //console.log("Check 7");
  //}
