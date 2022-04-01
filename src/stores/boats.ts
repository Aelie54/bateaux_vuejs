import { defineStore } from "pinia";
//persist: true,
//store : liste d'objets de type boat attention à faire : npm i pinia-plugin-persistedstate
export const AllBoat = defineStore({
  id: "boats",
  state: () => ({
    list: [],
  }),
  persist: true,
  getters: {
      getList: (state) => state.list,
    },
    actions: {
        increment() {
        },
    },
});