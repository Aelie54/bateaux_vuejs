<template>
  <form @submit.prevent="add(boat)">
    <h1>Ajouter un Bateau de l'horreur</h1><br />
    <img src="https://www.super-hobby.fr/zdjecia/4/7/6/19895_rd.jpg" style="height: 300px"/><br /><br /> 

    <input type="text" name="boat_name" id="name" placeholder="nom du bateau" v-model="boat.name"/><br />

    <input type="text" name="proprio_name" id="men" placeholder="nom du propriétaire" v-model="boat.men"/><br />

    <input type="number" name="boat_height" id="size" placeholder="taille du bateau" v-model="boat.size"/><br />

    <input type="number" name="boat_price_location" id="price" placeholder="prix de location du bateau" v-model="boat.price"/><br /><br />

    <input type="submit" value="Ajouter un hollandais volant" id="submit"/><br /><br />
  </form>
  <!--<TabView />-->
</template>

<script>
// mes imports : ma page mère, le mapwrittable et ma liste!
  // import TabView from "../components/TabView.vue";
import { mapState, mapWritableState } from "pinia";
import  { AllBoat } from "../stores/boats";
import {useRouter, useRoute} from "vue-router";

//mon conteneur d'info pour envoie au store
export default {
  data() {
    return {
      boat: {
        name: "",
        size: 0,
        men: "",
        price: 0,
      },
    };
  },

  //j'ajoute ma page mère! avec toutes ses entrées!
  components: {
    //TabView
  },
  // pour pouvoir ecrire dans mon store et ma liste
  computed: {
    ...mapWritableState(AllBoat, ["list"]),
  },
  //la fonction qui se lance au moment du submit
  methods: {
    add(boat) {
      console.log(boat);
      let error = "format of your data is not accepted";
      if (
        typeof this.boat.name === "string" &&
        this.boat.size > 0 &&
        typeof this.boat.men === "string" &&
        this.boat.price > 0
      ) {
        //calcul de la rentabilité d'après prix
          boat.rentability = this.boat.price * 12;
          //ajout de l'objet boat dans la liste
          this.list.push(boat);
          // faire la commande dans le temrinal : " npm install vue-router@4 "
          this.$router.push("/dashboard");
      }
      return
    },
  },
};
</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
