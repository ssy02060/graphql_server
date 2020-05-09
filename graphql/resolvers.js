//resolver를 어떻게 정의하는지에 따라 다른 DB에 접근하거나 할 수 있다.
import {DB} from "./db"


const resolvers = {
    Query :{
        Books : () => books,
        Bookstores : () => bookstore
    }
} 

export default resolvers;