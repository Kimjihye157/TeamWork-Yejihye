var idx = 0;
function add() {
    var n1 = document.getElementById("num_1").value;
    var m1 = document.getElementById("nam_1").value;

    alert(n1 + m1 + " 학생을 '코딩과 인생' 과목 수강생으로 추가하시겠습니까?");
    alert(n1 + m1 + " 학생이 '코딩과 인생' 과목 수강생으로 추가되었습니다!");

    const table = document.getElementById('numnam');
    const newRow = table.insertRow();

    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);
    const newCell3 = newRow.insertCell(2);
    const newCell4 = newRow.insertCell(3);
    const newCell5 = newRow.insertCell(4);
    const newCell6 = newRow.insertCell(5);

    newCell1.innerText = document.getElementById('num_1').value;
    newCell2.innerText = document.getElementById('nam_1').value;
    newCell3.innerHTML = "<input type='radio' id='md_1' name='radio_"+idx+"' name='ok' onclick='change1();'>";
    newCell4.innerHTML = "<input type='radio' id='md_2' name='radio_"+idx+"' name='ok' onclick='change1();'>";
    newCell5.innerHTML = "<input type='button' id='md_3' value='삭제' onclick='deleteRow(this);'>";
    newCell6.innerHTML = "<input type='button' id='md_3' value='학생 조회' onclick='search(this);'>";

    idx += 1;
}
function change1(){
    var a1 = document.getElementById("md_1");
    var a2 = document.getElementById("md_2");
}
function deleteRow(row) {
    var d = row.parentNode.parentNode.rowIndex;
    document.getElementById('numnam').deleteRow(d);
 }
 function search(row){
    var t = document.getElementById('numnam');
    var num = t.tBodies[0].children[row.parentNode.parentNode.rowIndex].children[0].innerText
    var name = t.tBodies[0].children[row.parentNode.parentNode.rowIndex].children[1].innerText
    alert( num + ' '+ name + ' 학생은 2학년입니다.');
 }