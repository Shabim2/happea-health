<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <table>
      <th>NAME</th>
      <th>ADDRESS</th>
      <th>PHONE NUMBER</th>
      <th>CONDITIONAL</th>  
      <tr v-for="player in players" :key="player.id" v-bind:class="{bad: player.flag === true}">
        <router-link :to="{name: 'Players', params: {id: player.id}}"><td>{{player.name}}</td></router-link>
        <td>{{player.address}}</td>
        <td>{{player.phone}}</td>
        <td v-if="player.flag === true">yes</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    players: Array
  },
  mounted(){
    this.players = [
        {
          id: 1,
          name: "john",
          address: "111",
          phone: "12123",
          flag: true,
        },
        {
          id: 2,
          name: "jjoe",
          address: "111",
          phone: "12123",
          flag: false,
        },
        {
          id: 3,
          name: "josh",
          address: "111",
          phone: "12123",
          flag: true
        }
      ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.bad{
  color: red;
}

</style>
