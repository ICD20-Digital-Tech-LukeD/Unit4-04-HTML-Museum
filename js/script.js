function MuseumEntry(){
  let age = document.getElementById("age").value;
  let select = document.getElementById("days");
  let day = select.options[select.selectedIndex].value
  let result = document.getElementById("result");
  if (age < 5 || age > 95){
    result.innerHTML = "You can enter for free";
  }
  else if (age >= 12 && age <= 21 || day == "tuesday" || day == "thursday"){
    result.innerHTML = "You can apply for student discount";
  }
  else{
    result.innerHTML = "You have to pay full price";
  }
}
