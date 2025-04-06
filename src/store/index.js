import { createStore } from "vuex";
import likes from "@/store/modules/likes";
import { postModule } from "@/store/modules/post";

export default createStore({
  state: () => ({
    nameAuth: "Denis",
  }),
  modules: {
    likes,
    post: postModule,
  },
});
