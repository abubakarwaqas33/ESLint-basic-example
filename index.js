/*  eslint no-const-assign: "error"   */
/*  eslint-env es6  */

import React from "react";
import { dbName } from "./server.js";

class HelloWorld extends React.Component {
  render() {
    return <div>Hello World</div>;
  }
}

function addVal(num1, num2) {
  return num1 + num2;
}

function printName(studentName) {
  console.log(studentName);
}

console.log(addVal(1, 2));
printName("Abubakar");

console.log(dbName, "Testing database name");
