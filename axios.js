//so here creating one thing here bro 
const axios = require('axios');

function myDisplayer(obj){
    document.getElementById("remo").innerHTML = obj;
}

axios.get("https://catfact.ninja/fact")
.then((response)=>{
    myDisplayer(response.data)
  }
)
