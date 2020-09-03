import Axios from "axios"

export default{
    Players(){
        return [
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
    },
    async getPlayers(){
        let res = await Axios.get('https://www.balldontlie.io/api/v1/players?per_page=100')
        let playerinfo = res.data.data
        return playerinfo
        
    },
    async getPlayer(id){
        let res = await Axios.get('https://www.balldontlie.io/api/v1/players/'+id)
        let playerinfo = res.data
        return playerinfo
    },
    async getPlayerStats(id){
        let res = await Axios.get('https://www.balldontlie.io/api/v1/season_averages?player_ids[]='+id)
        let playerinfo = res.data.data[0]
        console.log(playerinfo)
        return playerinfo
    }
}