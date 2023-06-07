   function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   function display(value) {
    document.getElementById("result").value += value;
   }

   function calculate() {
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
   }

   function backSpace(){
    document.getElementById("result").value = document.getElementById("result").value.slice(0, - 1);
   }



   



  