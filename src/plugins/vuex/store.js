import {createStore} from "vuex"
import user from "@/plugins/vuex/user"
import book from "@/plugins/vuex/book"
import category from "@/plugins/vuex/category";

export default createStore({
    modules: {
        book,
        category,
        user
    }
})
