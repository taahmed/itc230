'use strict'

let students = [
    {sid:123, name: "Nizar", sex:"m", age:20, department:"network"},
    {sid:321, name: "Anas", sex:"m", age:19, department:"database"},
    {sid:234, name: "Ali", sex:"m", age:25, department:"web development"},
    {sid:456, name: "Ahmed", sex:"m", age:29, department:"programming"},
    {sid:125, name: "Aisha", sex:"f", age:19, department:"data analytics"},
    {sid:963, name: "kedi", sex:"f", age:40, department:"web design"},   
];

exports.getAll = () => {
    return students;
};



