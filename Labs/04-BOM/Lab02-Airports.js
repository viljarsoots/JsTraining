//alert ("Implement solution in Airports.js script");
// let departures = 0;
 //let departures = document.getElementById("slcDeprtures").value;
//let n= airports.indexOf(document.getElementById("slcDeprtures").value);
function addDepartures(){
    let departuresHtml = "";
    for (let i = 0; i < airports.length; i++){
        departuresHtml = departuresHtml + `
        <option value= "${i}">${airports[i].departure}</option>
        `;
        
    //     let destinationsHtml = "";
    // for (let j = 0; j < airports[i].destinations.length; j++){
    //     destinationsHtml = destinationsHtml + `
    //     <option>${airports[i].destinations[j]}</option>
    //     `;
    // }
    // document.querySelector("#slcDestinations").innerHTML = destinationsHtml;

    }
    document.querySelector("#slcDepartures").innerHTML = departuresHtml;
    
}
function getDeparture(){
    
        return {"departures" : document.getElementById("slcDepartures").value};  

}
function getCityId(){
    let departure = getDeparture();
    let city = departure.departures;
    return city;
}


async function addDestinations(){
     let id = await getCityId();
    let destinationsHtml = "";
    for (let j = 0; j < airports[id].destinations.length; j++){
        destinationsHtml = destinationsHtml + `
        <option>${airports[id].destinations[j]}</option>
        `;
    }
    document.querySelector("#slcDestinations").innerHTML = destinationsHtml;
    
}


