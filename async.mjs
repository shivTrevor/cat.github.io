//here i will create a my displayer function which 
//now from this object i have to take out from quote here ...
function myDisplayer(obj){
    document.getElementById("obj").innerHTML = obj;
}

async function catfacts(){
    const response = await fetch('https://catfact.ninja/fact');
    const cat = response.json();
    console.log(cat)
    return cat;
}

catfacts().then((cat)=>myDisplayer(cat.fact))