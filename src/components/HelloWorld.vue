<template>
  <div class="hello">
    <displayer v-bind:header="msg" />
    Players per Page
    <select v-model="playersPerPage">
      <option>5</option>
      <option>10</option>
      <option>25</option>
      <option>50</option>
    </select>
    <table>
      <tr>
      <th>NAME</th>
      <th>Height</th>
      <th>Position</th>
      <th>CONDITIONAL</th>  
      </tr>
      <tbody>
      <tr v-for="player in players" :key="player.id" v-bind:class="{bad: player.height_feet == null}">
        <router-link :to="{name:'Players', params: {id: player.id}}"><td>{{player.first_name}} {{player.last_name}}</td></router-link>
        <td v-if="player.height_feet">{{player.height_feet}}' {{player.height_inches}}"</td>
        <td v-else>N/A</td>
        <td>{{player.position}}</td>
        <td v-if="player.flag === true">yes</td>
        <td v-else>no</td>
      </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" v-if="currentPage > 1"><a class="page-link" v-on:click="currentPage -= 1">Previous</a></li>
        <li class="page-item" v-for="n in numPages" :key="n"><a href="" @click.prevent="setPage(n)">{{n}}</a></li>
        <li class="page-item" v-if="currentPage < numPages"><a class="page-link" v-on:click="currentPage += 1">Next</a></li>
      </ul>
    </nav>
    <p><button v-on:click="count += 1">Add One More Click</button></p>
    <countdisplay v-bind:count="count" />
  </div>
</template>

<script>
import displayer from "@/components/displayer.vue"
import playerdata from '../services/players'
import countdisplayer from "../components/countdisplay.vue"
export default {
  
  name: 'HelloWorld',
  components:{
        'displayer': displayer,
        'countdisplay': countdisplayer
  },
  props: {
    msg: String
  },
  data: function() {
    return{
    count: 0,
    players: [
      ],
    currentPage: 1,
    playersPerPage: 25,
    numPages: 1,
    }
  },
  async mounted(){
    this.players = await playerdata.getPlayers()
    
    this.numPages = await Math.ceil(this.players.length / this.playersPerPage)
  },
  methods: {
    setPage(n) {
      this.currentPage = n;
    },
    setPlayersPerPage(n){
      this.playersPerPage = n;
    }
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
