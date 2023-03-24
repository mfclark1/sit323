/**
 * Calculator Microservice - 4.1P  
 * Matt Clark
 */

//Constants Required in All Microservices
const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = 3040;
// End Constants

app.get("/", (req, res) => {
   
    console.log("Welcome to the Calculator Microservice. This calulator works with two variables, n1 and n2, in that order.")
    console.log("To use addition, replace each '##' with your n1 and n2 values, then enter into your browser: 'http://localhost:3040/add?n1=##&n2=##'");
    console.log("To use subtraction, replace each '##' with your n1 and n2 values, then enter into your browser: 'http://localhost:3040/subtract?n1=##&n2=##'");
    console.log("To use multiplication, replace each '##' with your n1 and n2 values, then enter into your browser: 'http://localhost:3040/multiply?n1=##&n2=##'");
    console.log("To use division, replace each '##' with your n1 and n2 values, then enter into your browser: 'http://localhost:3040/divide?n1=##&n2=##'");
    
    
})

//Addition
const add = (n1, n2) => {
    return n1 + n2;
}
app.get("/add", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined.");
        }
        if (isNaN(n2)) {
            throw new Error ("n2 incorrectly defined.");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log()
            throw new Error("Parsing Error")
        }
        const result = add(n1, n2);
        res.status(200).json({statuscocde:200, data: result })
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({statuscocde:500, msg: error.toString()})
    }
});



// End Addition

//Subtraction

const subtract = (n1, n2) => {
    return n1 - n2;
}
app.get("/subtract", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined.");
        }
        if (isNaN(n2)) {
            throw new Error ("n2 incorrectly defined.");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log()
            throw new Error("Parsing Error")
        }
        const result = subtract(n1, n2);
        res.status(200).json({statuscocde:200, data: result })
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({statuscocde:500, msg: error.toString()})
    }
});



// End Subtraction

// Multiplication

const multiply = (n1, n2) => {
    return n1 * n2;
}
app.get("/multiply", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined.");
        }
        if (isNaN(n2)) {
            throw new Error ("n2 incorrectly defined.");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log()
            throw new Error("Parsing Error")
        }
        const result = multiply(n1, n2);
        res.status(200).json({statuscocde:200, data: result })
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({statuscocde:500, msg: error.toString()})
    }
});


// End Multiplication

// Division

const divide = (n1, n2) => {
    return n1 / n2;
}
app.get("/divide", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
        if (isNaN(n1)) {
            throw new Error("n1 incorrectly defined.");
        }
        if (isNaN(n2)) {
            throw new Error ("n2 incorrectly defined.");
        }

        if (n1 === NaN || n2 === NaN) {
            console.log()
            throw new Error("Parsing Error")
        }
        const result = divide(n1, n2);
        res.status(200).json({statuscocde:200, data: result })
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({statuscocde:500, msg: error.toString()})
    }
});
// End Division

//App Listener for all Microservices
app.listen(port, () => {
    console.log("Hello, I'm listening to port: " + port);
    
})
//End App Listener

        
    

        
    

        
    
        
    
