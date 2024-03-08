var num=10;

(function f(){
    console.log("inside the iife function num value:",num)
    var num=20
    console.log("after the redeclare in function num value:",num)

})()

console.log("outside the function num value:",num)

/*
Conclusion :- 
1) var is global scope and functional scope
2) u can redeclare in any type of function (function decleration, function expression) its 
   works similer
3)u can access the var type of variable before its decleration bcoz of hoisting 
4)if u dont declare but tru to access that then its shows reference error var variabel not defined


*/