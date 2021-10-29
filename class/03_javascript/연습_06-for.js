for(let i=0; i<3; i=i+1){
    console.log("안녕하세요!!!")
}
//3VM1722:2 안녕하세요!!!
//undefined
const classmates = ["철수", "영희", "훈이"]
//undefined
classmates
//(3) ['철수', '영희', '훈이']
for(let i=0; i<3; i++){

}
//undefined
for(let i=0; i<3; i++){
    console.log(classmates[i])
}
//VM1898:2 철수
//VM1898:2 영희
//VM1898:2 훈이
//undefined
for(let i=0; i<3; i++){
    console.log(classmates[i]+"입니다.")
}
//VM1921:2 철수입니다.
//VM1921:2 영희입니다.
//VM1921:2 훈이입니다.
//undefined
const classmates2 = [
    { name: "철수", age: 10, school: "다람쥐초등학교"},
    { name: "영희", age: 11, school: "공룡초등학교"}
]
//undefined
classmates2[0]
//{name: '철수', age: 10, school: '다람쥐초등학교'}
classmates2[0].school
//'다람쥐초등학교'