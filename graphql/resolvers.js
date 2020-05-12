//resolver를 어떻게 정의하는지에 따라 다른 DB에 접근하거나 할 수 있다.
import {books, bookstore, getBookById} from "./db";

// 키 : 값
// 변수 : value
// 객체 안에서 { 변수 : 함수 => 메서드 }
// 객체 안에 정의된 함수는 메서드라고 정의함.
const resolvers = {
    Query :{
        books : () => books,
        //_ : object, id: 매개변수
        book : (_, { id }) =>  getBookById(id),
        bookstores : () => bookstore
    }
};

export default resolvers;