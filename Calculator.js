import React, { useState, useEffect } from "react";
import "./keys";
import "./key.css";

function Calculator() {
    const [val1, setVal1] = useState(0); //first variable for first operand is set to 0
    const [val2, setVal2] = useState(""); //second variable for second operand is an empty string
    const [operation, setOperation] = useState(null);

    useEffect(() => { }, [val1, val2, operation]); //setting the useEffect so that it triggers when either of the three valyes triggers


    //like the calculate function, but just setting up the values and not touching them until later
    const operationsCalc = {
        "+": (firstValue, secondValue) => firstValue + secondValue,
        "-": (firstValue, secondValue) => firstValue - secondValue,
        "*": (firstValue, secondValue) => firstValue * secondValue,
        "/": (firstValue, secondValue) => firstValue / secondValue,
        "=": (firstValue, secondValue) => secondValue,
    };

    //function for clearing calculator by setting it to what it was
    const resetCalculator = () => {
        setVal1(0);
        setVal2("");
    };

    const handleInput = (digit) => {
        setVal2(val2 === "0" ? String(digit) : val2 + digit); //this is just handling the input. doesn't change much from wthe html+js version
    }

    //this will do the actual calculations
    const handleCalc = () => {
        let temp = operationsCalc[op](
            parseFloat(val1),
            parseFloar(val2)
        );
        setOperation(null);
        setVal2(String(temp));
        setVal1(null);
    }

    //if there's a decimal press, add it
    const inputDecimal = () => {
        if (!/\./.test(val2)) {
            setVal2(val2 + ".");
        }

    };

    //do the actual operations when the values are inputted
    const handleOperator = (value) => {
        if (Number.isInt(value)) {
            handleInput(parseInt(value, 10)); //converts the string to a number
        } else if (value in operationsCalc) {
            if (op === null) { //move val2 to val1 if nothing's there
                setOperation(value);
                setVal1(val2);
                setVal2("");
            }
            if (op) {
                setOp(value);
            }
            if (val1 && op && val2) { //do the operations
                handleCalc();
            }
            else if (value === ".") {
                inputDecimal();
            }
            else if (value === "clear") {
                resetCalculator();
            }
        }
    }

    return (
        //return the keypad
        <div className="calc">
            <div className="result">{result}</div>
            <div className="keys">
                <div className="numbers">
                    <key Value={9} onClick={handleOperator} />
                    <key Value={8} onClick={handleOperator} />
                    <key Value={7} onClick={handleOperator} />
                    <key Value={6} onClick={handleOperator} />
                    <key Value={5} onClick={handleOperator} />
                    <key Value={4} onClick={handleOperator} />
                    <key Value={3} onClick={handleOperator} />
                    <key Value={2} onClick={handleOperator} />
                    <key Value={1} onClick={handleOperator} />
                    <key Value={0} onClick={handleOperator} />
                </div>
                <div className="operators-and-values">
                    <key value={"+"} onClick={handleOperator} />
                    <key value={"-"} onClick={handleOperator} />
                    <key value={"/"} onClick={handleOperator} />
                    <key value={"*"} onClick={handleOperator} />
                    <key value={"="} onClick={handleOperator} />
                    <key value={"."} onClick={handleOperator} />
                    <key value={"clear"} onClick={handleOperator} />
                </div>
            </div>
        </div>

    );
}

export default Calculator;
