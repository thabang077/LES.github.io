
function newTableRow()
			 {

			 
			      var newRow= document.createElement("tr");
				  
				  var newNumber= document.createElement("td");
				  var newLognumber= document.createElement("td");
				  var newConsultant= document.createElement("td");
				  var newUpdate= document.createElement("td");
				  var newGroup= document.createElement("td");   
                  isValid = true;
				  
				  var table= document.getElementById("tab");
				  
				  table.appendChild(newRow);   
				  newRow.appendChild(newNumber);
				  newRow.appendChild(newLognumber);
				  newRow.appendChild(newConsultant);
			      newRow.appendChild(newUpdate);
				  newRow.appendChild(newGroup);  

				  newNumber.innerHTML=document.getElementById("number").value;
				  newLognumber.innerHTML=document.getElementById("lognumber").value;
				  newConsultant.innerHTML=document.getElementById("consultant").value;
                  newUpdate.innerHTML=document.getElementById("update").value;
			      newGroup.innerHTML=document.getElementById("group").value;

			     if(document.getElementById("group").value=="invoicing")
		        newRow.className = "style1";
				
				    if(document.getElementById("group").value=="workflow")
		        newRow.className = "style2";
				
				    if(document.getElementById("group").value=="barcoding")
		        newRow.className = "style3";

                    }