import {createStore} from "vuex";
import user from "@/plugins/vuex/user";

export default createStore({
    modules: {
        user
    }
})
