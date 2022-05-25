console.log("connected to js");

function changeName() {

    document.querySelector('#changeName')
    .innerHTML= "Iron Man"
    
}

function removeUser1() {

    console.log("this is the remove user request")
    document.querySelector('#removeUser1').innerHTML = '';
    decreaseRequests()
}

function removeUser2() {

    console.log("this is the remove user request")
    document.querySelector('#removeUser2').innerHTML = '';
    decreaseRequests()
}

function decreaseRequests() {
    document.querySelector('#rejected').innerHTML--;
    
}

function increaseRequests() {
    var count = 498
    document.querySelector('#accepted').innerHTML++;
    
}




// psuedo code
// change jane doe name to Iron Man
    // grab jane doe by h1 id changeName
    // var name = document.querySelector('#changeName');
    // replace name with iron man
    // name.innerHTML= "Iron Man"

// psuedo code
// click x to remove user from request
// place on click event to x image
// on click of x image 
// remove the user from request

// psuedo code
// on click of x or check the connection requests will decrease
// var rejected = 2


// var count1 = 3;
// var counter1 = document.querySelector('#numberoflikes1');

// function add1() {
//     count1++;
//     counter1.innerText = count1 + " like(s)";
// }