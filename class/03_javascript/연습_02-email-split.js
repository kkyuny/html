const email = "codecamp@gmail.com"
//undefined
email
//'codecamp@gmail.com'
email.includes("@")
//true
email.split("@")
//(2) ['codecamp', 'gmail.com']
email.split("@")[0]
//'codecamp'
email.split("@")[1]
//'gmail.com'
const front = email.split("@")[0]
//undefined
const back = email.split("@")[1]
//undefined
front
//'codecamp'
back
//'gmail.com'
const newFront = []
//undefined
front[0]
//'c'
newFront.push(front[0])
//1
newFront.push(front[1])
//2
newFront.push(front[2])
//3
newFront.push(front[3])
//4
//newFront.push(*)
//VM1578:1 Uncaught SyntaxError: Unexpected token '*'
newFront.push("*")
//5
newFront.push("*")
//6
newFront.push("*")
//7
newFront.push("*")
//8
newFront
//(8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
newFront.join("")
//'code****'
newFront.join("") + "@" + back
//'code****@gmail.com'
newFront
//(8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
const result = newFront.join("") + "@" + back
//undefined
result
//'code****@gmail.com'