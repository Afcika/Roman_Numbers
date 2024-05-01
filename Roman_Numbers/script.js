function convertToRoman() {
  const num = document.getElementById("number").value;
  const arr = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const Romarr = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let symbols = '';

  let Num = parseInt(num);
  let k = 0;

  for(let i = 0; i < arr.length; i++) {
    while(Num >= arr[i]) {
      symbols += Romarr[i];
      Num -= arr[i];
    }
  }

  document.getElementById("output").value = symbols;
}