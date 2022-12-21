var forms = document.querySelectorAll(".delete");
del();
function addmore() {
  var s = `<div class="row1 row">
  <input placeholder="Enter Course Name" type="text" />
  <input class="credit" placeholder="Enter No of Credits " name="credit" type="number" />
  <select class="optionss" name="optionselect">
    <option value="10" selected>O</option>
    <option value="9">A+</option>
    <option value="8">A</option>
    <option value="7">B+</option>
    <option value="6">B</option>
    <option value="0">wd</option>
  </select>
  <button class="delete" onclick="del()"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></button>
</div>`;
  var a = document.querySelector(".insert");

  a.insertAdjacentHTML("beforeend", s);
  del();
  // forms = document.querySelectorAll(".delete");
}
function calculate() {
  var credit = [10];
  var all = document.querySelectorAll(".credit");
  all.forEach(function (currentValue, value) {
    credit[value] = parseInt(currentValue.value);
  });
  var grade = [10];
  var all = document.querySelectorAll(".optionss");
  all.forEach(function (currentValue, value) {  
    grade[value] = parseInt(currentValue.value);
  });
  var totalcredit = 0;
  var gpa = 0;
  for (i = 0; i < credit.length; i++) {
    totalcredit += credit[i];
    gpa += credit[i] * grade[i];
  }
  document.querySelector(".cre").innerHTML = totalcredit;
  document.querySelector(".gpa").innerHTML = gpa / totalcredit;
}
function del() {
  var forms = document.querySelectorAll(".delete");
  forms.forEach((form) => {
    form.addEventListener("click", function () {
      form.parentElement.remove();
    });
  });
}
