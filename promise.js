//fetch api by default hame promise de dega yahan par
function myDisplayer(obj){
    document.getElementById("demo").innerHTML = obj;
}

const p = fetch("https://catfact.ninja/fact")
p.then((obj)=>{return obj.json()})
.then((value)=>{myDisplayer(value.fact)})