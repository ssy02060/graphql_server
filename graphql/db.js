//export는 import 와 쌍으로 동작한다.
//다른 모듈(파일에서) 사용할 수 있게 보내주는 느낌이다.
export const books = [
    {
        id : 0,
        name : "나미야 잡화점",
        publishier : "출판사",
        author : "히가시노 게이고"
    },
    {
        id : 1,
        name : "불안",
        publishier : "출판사",
        author : "알랭드 보통"
    },
    {
        id : 2,
        name : "빅픽쳐",
        publishier : "출판사",
        author : "더글라스 케네디"
    }
];
export const bookstore = {
    id: 0,
    name: "교보문고",
    location: "동성로"
}
// 함수 표현식 + arrow 함수
// 함수 표현식은 함수의 참조값을 변수에 저장하는 형식. 
export const getBookById = id => {

    console.log(id);
    const filteredBook = books.filter(book => book.id === id);
    
    console.log(filteredBook);
    return filteredBook[0];
}