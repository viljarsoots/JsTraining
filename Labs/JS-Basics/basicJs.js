let nums =[];

function askNumber(){
    let num = 0;


    do{
     num = prompt("Please enbter a number",)
     nums.push(num);}
    while (num != 0);
        
        return nums;
        
    
}


let max = 0;
let min = 0;


function findMax(){
    max = parseInt(nums[0]);
for(let i = 1; i < nums.length; i++){
    if (parseInt(nums[i])> max){
        max = nums[i];
    }
}
return max;
}


function findMin(){
    min = parseInt(nums[0]);
    for(let i = 1; i < nums.length-1; i++){
        if (parseInt(nums[i])< min){
            min = nums[i];
        }
    }
    return min;
    }


    function displayMaxMin(){
        findMax();
        findMin();
        let maxMin = alert("Max was "+ max + " Min was " + min);
    }


    let sum = 0;
    function sumAllNumbers(){
        for(let i = 1; i< nums.length; i++){
            sum = sum + parseInt(nums[i]);
        }
        return alert("Sum off all inserted numbers " + sum);
    }


    function averageOfNums(){
        return alert("Average off all numbers is " + (sum / (nums.length-2)));
    }


    function printNums(){
         nums.pop();
        return alert("All numbers inserted were "+ nums.toString());

    }

    async function makeItHappen(){
        askNumber();
        await displayMaxMin();
        await sumAllNumbers();
        await averageOfNums();
        await printNums();
    }

    
