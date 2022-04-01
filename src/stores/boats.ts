import { defineStore } from "pinia";

//store : liste d'objets de type boat
export const AllBoat = defineStore({
  id: "boats",
  state: () => ({
    list: [],
  }),
  getters: {
    getList: (state) => state.list,
  },
  actions: {
    increment() {
    },
  },
});