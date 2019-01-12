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

function readFormData() {
    var formData = {};
    formData["fullTime"] = document.getElementById("fullTime").value;
    formData["sport"] = document.getElementById("sport").value;
    formData["date"] = document.getElementById("date").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullTime;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.sport;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.date;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                    <a onClick="onDelete(this)">Deletar</a>`;
}

function resetForm() {
    document.getElementById("fullTime").value = "";
    document.getElementById("sport").value = "";
    document.getElementById("date").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullTime").value = selectedRow.cells[0].innerHTML;
    document.getElementById("sport").value = selectedRow.cells[1].innerHTML;
    document.getElementById("date").value = selectedRow.cells[2].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullTime;
    selectedRow.cells[1].innerHTML = formData.sport;
    selectedRow.cells[2].innerHTML = formData.date;

}

function onDelete(td) {
    if (confirm('Você quer realmente deletar essa informação ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullTime").value == "") {
        isValid = false;
        document.getElementById("fullTimeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullTimeValidationError").classList.contains("hide"))
            document.getElementById("fullTimeValidationError").classList.add("hide");
    }
    return isValid;
}