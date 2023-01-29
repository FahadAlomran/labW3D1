"use strict";
exports.__esModule = true;
var Student1 = {
    id: 1,
    name: 'fahad',
    level: 'a',
    isSenior: true
};
var Student2 = {
    id: 2,
    name: 'ali',
    level: 'b',
    isSenior: true
};
var Student3 = {
    id: 3,
    name: 'ahmad',
    level: 'a',
    isSenior: false
};
var Teacher1 = {
    id: 1,
    name: 'kalid',
    specialty: 'ad',
    courseNum: 4
};
var Teacher2 = {
    id: 2,
    name: 'saed',
    specialty: 'av',
    courseNum: 2
};
var Teacher3 = {
    id: 3,
    name: 'sad',
    specialty: 'agg',
    courseNum: 5
};
var school = [Student1, Student2, Student3, Teacher1, Teacher2, Teacher3];
function print() {
    console.log(school);
}
print();
function change(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].isSenior == true) {
            array[i].isSenior = false;
        }
        else if (array[i].isSenior == false) {
            array[i].isSenior = true;
        }
    }
    console.log(array);
}
function changeNum(array, name, n) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].name == name) {
            array[i].courseNum = n;
        }
        console.log(array);
    }
}
change(school);
changeNum(school, 'sad', 10);
