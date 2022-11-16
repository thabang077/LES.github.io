
//sumit button function

var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

//Reading data from text boxes function
function readFormData() {
    var formData = {};
    formData["numbers"] = document.getElementById("numbers").value;
    formData["lognumber"] = document.getElementById("lognumber").value;
    formData["category"] = document.getElementById("category").value;
    formData["consaltant"] = document.getElementById("consaltant").value;
    formData["update"] = document.getElementById("update").value;

    return formData;
}

//add a new table(cells) on the table 
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);


    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.numbers;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lognumber;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.category;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.consaltant;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.update;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;

}

//Clear text boxes
function resetForm() {
    document.getElementById("numbers").value = "";
    document.getElementById("lognumber").value = "";
    document.getElementById("category").value = "";
    document.getElementById("consaltant").value = "";
    document.getElementById("update").value = "";

    selectedRow = null;
}

//edit data from the text boxes
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("numbers").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lognumber").value = selectedRow.cells[1].innerHTML;
    document.getElementById("category").value = selectedRow.cells[2].innerHTML;
    document.getElementById("consaltant").value = selectedRow.cells[3].innerHTML;
    document.getElementById("up").value = selectedRow.cells[4].innerHTML;

}



//update information from input(textboxes)
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.numbers;
    selectedRow.cells[1].innerHTML = formData.lognumber;
    selectedRow.cells[2].innerHTML = formData.category;
    selectedRow.cells[3].innerHTML = formData.consaltant;
    selectedRow.cells[4].innerHTML = formData.update;
}


//data deletion from the table
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

// Validate if the user inserted a number or else the program doesn't proceed
function validate() {
    isValid = true;
    if (document.getElementById("numbers").value == "") {
        isValid = false;
        document.getElementById("numbersValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("numbersValidationError").classList.contains("hide"))
            document.getElementById("numbersValidationError").classList.add("hide");
    }
    return isValid;
}

