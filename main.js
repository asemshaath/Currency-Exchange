//https://www.countryflags.io/us/flat/32.png
//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=d084b60b0a401be385e9

let imgUrl1 = "https://www.countryflags.io/";
let imgUrl2 = "/flat/32.png";

let apiUrl1 = "https://free.currconv.com/api/v7/convert?q=";
let apiUrl2 = "&compact=ultra&apiKey=d084b60b0a401be385e9";

function setFlag1(){

    var e = document.getElementById("curr1");
    var value = e.options[e.selectedIndex].value; // get selected option value
    var text = e.options[e.selectedIndex].text;
    
    var country = text.slice(0,2);

    url = imgUrl1 + country + imgUrl2;

    if(text == "Select Currency"){

        document.getElementById("imgCurr1").src = "";
    }
    else{
        
        document.getElementById("imgCurr1").src = url;
    }

    // alert(url);

}

function setFlag2(){

    var e = document.getElementById("curr2");
    var value = e.options[e.selectedIndex].value; // get selected option value
    var text = e.options[e.selectedIndex].text;
    
    var country = text.slice(0,2);

    url = imgUrl1 + country + imgUrl2;

    if(text == "Select Currency"){

        document.getElementById("imgCurr2").src = "";
    }
    else{

        document.getElementById("imgCurr2").src = url;
    }
    

    // alert(url);

}

function swap(){

    var e = document.getElementById("curr1");
    var value1 = e.options[e.selectedIndex].value; // get selected option value

    var a = document.getElementById("curr2");
    var value2 = a.options[a.selectedIndex].value; // get selected option value

    // swaping the elements
    document.getElementById("curr1").value = value2;
    document.getElementById("curr2").value = value1;
    
    // changing the flags
    setFlag1();
    setFlag2();

    var in1 = document.getElementById("inputCur1").value;
    var in2 = document.getElementById("inputCur2").value;

    document.getElementById("inputCur1").value = in2;
    document.getElementById("inputCur2").value = in1;


    // alert(value1 + " " + value2);
    console.log("Swap is clicked");
}

function clearData(){

    document.getElementById("inputCur1").value = "";
    document.getElementById("inputCur2").value = "";
    document.getElementById("curr1").value = "Select Currency";
    document.getElementById("curr2").value = "Select Currency";
    document.getElementById("imgCurr1").src = "...";
    document.getElementById("imgCurr2").src = "...";

    console.log("Clear button is clicked");
    // alert("Clear button is clicked");
}

async function calc(){


    var currencyVal1 = document.getElementById("inputCur1").value;
    
    var e1 = document.getElementById("curr1");
    var value1 = e1.options[e1.selectedIndex].value; // get selected option value
    var text1 = e1.options[e1.selectedIndex].text;

    var e2 = document.getElementById("curr2");
    var value2 = e2.options[e2.selectedIndex].value; // get selected option value
    var text2 = e2.options[e2.selectedIndex].text;

    const convertion = text1 + "_" + text2;

    var api = apiUrl1 + convertion + apiUrl2;

    const response = await fetch(api);
    const data = await response.json();

    var unitValue = data[convertion];
    
    const finalResult = unitValue * currencyVal1;

    console.log(data);

    document.getElementById("inputCur2").value = finalResult;

    console.log("Calc button clicked");
    // alert(api);

}