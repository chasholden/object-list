var students = [];

//add button toggles the sections and removes text from table to prevent duplication

  $("#display-toggle").click(function(){
    $("#display").toggle("slow");
    $("#gather").toggle("slow");
    document.getElementById("table-body").innerHTML = "";
  });

//cancel button toggles the sections writes array content back into table

  $("#cancel").click(function(){
    
    for (i = 0; i < students.length; i++) {
    
    $("tbody").append("<tr><td>" + 
                      students[i].fname + 
                      "</td><td>" + 
                      students[i].lname + 
                      "</td><td>" + 
                      students[i].grade + 
                      "</td></tr>")
  }
    
    $(':input','#add-form').val('');
    $("#gather").toggle("slow");
    $("#display").toggle("slow");
  });

//submit button tests if fields are empty, then pushes input into the array, then loops through array to write content into table, then toggles the sections

$("#submit").click(function(){
  
  var fnameVal = document.forms["add-form"]["fname"].value;
  var lnameVal = document.forms["add-form"]["lname"].value;
  var gradeVal = document.forms["add-form"]["grade"].value;
  if (fnameVal == null || fnameVal =="" || lnameVal == null || lnameVal =="" || gradeVal == null || gradeVal =="") {
    alert("Please fill out all fields");
    return false;
  } else {
    
  students.push({fname: fnameVal, lname: lnameVal, grade: gradeVal});
    
  for (i = 0; i < students.length; i++) {
    
    $("tbody").append("<tr><td>" + 
                      students[i].fname + 
                      "</td><td>" + 
                      students[i].lname + 
                      "</td><td>" + 
                      students[i].grade + 
                      "</td></tr>")
  }
  
  $("#gather").toggle("slow");
  $("#display").toggle("slow");
  $(':input','#add-form').val('');
    return true;
  }
});

//clear button removes text from table and empties the array

  $("#clear").click(function(){
    document.getElementById("table-body").innerHTML = "";
    students = [];
  });
