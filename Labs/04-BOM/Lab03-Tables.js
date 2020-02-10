alert ("Implement solution in Lab03-Tables.js file ");
alert ("Test data connected: OrderNo: "+shipments[0].orderNo);



let i =0;
let number = 10;
function fillTable(){
        //let number = i + 10;
    let shipmentsHtml = "";
    for (i; i < number; i++){
        shipmentsHtml = shipmentsHtml + `
        <tr class="selectable" >
            <td class="center">${shipments[i].orderNo}</td>
            <td class="center">${shipments[i].date}</td>
            <td class="center">${shipments[i].customer}</td>								
            <td class="center">${shipments[i].trackingNo}</td>
            <td class="center">${shipments[i].status}</td>
            <td class="center">${shipments[i].consignee}</td>
            <td class="center">
            <a href="#" class="btn-action glyphicons eye_open btn-info"><i></i></a>
            <a href="#" class="btn-action glyphicons pencil btn-success"><i></i></a>
            <a href="#" class="btn-action glyphicons remove_2 btn-danger"><i></i></a>
            </td>
    </tr>
        `;
    } 
    
    document.querySelector("#dataFromFile").innerHTML = shipmentsHtml;
    return i;
}

function nextTen(){
    if(i >= shipments.length){
        i = shipments.length - 10;
        number = i + 10;

    }else{
    number = i + 10;
    }  
    fillTable(); 
    console.log(i);
    console.log(number);
}

function lastTen(){
    if( i <= 10){
        i = 0;
        number = 10;
    }else{
    i = i - 20;
    number = i + 10;
    }
    console.log(i);
    console.log(number);
    fillTable();
}

function firstRow(){
    i = 0;
    number = 10;
    fillTable();
    console.log(i);
    console.log(number);
}

function lastRow(){
    
    let lastnum = (shipments.length) % 10;
    i = (shipments.length)- lastnum;
    console.log(i);
    
    
    number = shipments.length;
    
    console.log(number);
    fillTable();
    
}