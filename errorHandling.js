try {
    console.log("Try blocks start here");
    console.log(x); // Error -> reference error
    console.log("remaining code of try block");
}
catch(error) {
    console.log("I am inside catch block");
    console.log("Your error is here: ", error);
}
finally {
    console.log("I will run everytime because I am FINALLY");
}


// Lets create a custom error
try {
    //Reference Error
    console.log(a);
}
catch(err) {
    throw new Error("Bhai pehle declare karo, phir print karna");
}

let errorCode = 100;
if(errorCode == 100) {
    throw new Error("Invalid Json");
}