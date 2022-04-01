<template>
  <table>
    <thead>
      <tr>
        <th>Bateau</th>
        <th>propriétaire</th>
        <th>rentabilité</th>
      </tr>
    </thead>
    <tbody>
      <!--on boucle sur la liste Allboat sur chaque objet boat : une ligne par bateau-->
      <tr v-for="boat in getList" :key="boat">
        <th>{{boat.name}}</th>
        <th>{{boat.men}}</th>
        <th>{{boat.rentability}}</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
// j'importe ma liste boat du store et le mapstate pour le mapwritable
import { AllBoat } from "../stores/boats";
import { mapState, mapWritableState } from "pinia";

export default {
// le getter permet de prendre la liste dans le store pour réutilisation
computed: {
      ...mapState(AllBoat, ['getList'])
},
};
</script>


<style scoped>

table {
  margin: 10px;
}
table, th, td {
  border: 1px solid;
}
td {
  width: 600px;
  padding: 10px;
}

</style>