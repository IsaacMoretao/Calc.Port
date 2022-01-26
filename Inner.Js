function insert(num){
 var numero = document.getElementById('Result').innerHTML;
 document.getElementById('Result').innerHTML = numero + num;
}
function caucular(){

  var res = document.getElementById('Result').innerHTML;
  if(result){
    document.getElementById('res').innerHTML = eval(res);
  }
}
