//resolver를 어떻게 정의하는지에 따라 다른 DB에 접근하거나 할 수 있다.

const book = {
    bookId : 0,
    bookName : "나미야 잡화점",
    publishier : "출판사",
    author : "히가시노 게이고"
}
const bookstore = {
    storeId: 0,
    storeName: "교보문고",
    location: "동성로"
}
const resolvers = {
    Query :{
        Books : () => book,
        Bookstores : () => bookstore
    }
} 

export default resolvers;