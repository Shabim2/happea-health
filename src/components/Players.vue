<template>
<div>
    <h1>
        {{play.id}}
    </h1>
    <h2>
        {{play.first_name}} {{play.last_name}}
    </h2>
    <h3>
        {{play.height_feet}}' {{play.height_inches}}
    </h3>
    <h4>
        {{play.position}}
    </h4>
    <table>
         <tbody>
        <tr>
            <th>
                Assists
            </th>
            <th>
                Blocks
            </th>
            <th>
                Points
            </th>
            <th>
                Rebounds
            </th>
        </tr>
        <tr>
            <td>
                {{playerStats.ast}}
            </td>
            <td>
                {{playerStats.blk}}
            </td>
            <td>
                {{playerStats.pts}}
            </td>
            <td>
                {{playerStats.reb}}
            </td>
        </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import playerdata from '../services/players'
export default {
    name: "Players",
    props:{

    },
    data: function(){
        return{ 
        players: Array,
        play: Object,
        playerStats: Object
        }
    },
    methods: {
        async findPlayer(){
            this.play = await playerdata.getPlayer(this.$route.params.id)
        },
        async getPlayerStats(){
            this.playerStats = await playerdata.getPlayerStats(this.$route.params.id)
        }
    },
    async mounted(){
        this.players = playerdata.Players(),
        await this.findPlayer()
        await this.getPlayerStats()

    }
}
</script>