<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsInfo/'+item.id">
                    <img class="mui-media-object mui-pull-left"
                         :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>{{ item.title}}</h1>
                        <p class='mui-ellipsis'>
                            <span>Add time: {{ item.add_time | dataFormat}}</span>
                            <span>click: {{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>


        </ul>

    </div>
</template>

<script>
    import {Toast} from 'mint-ui'
    export default {
        name: "newsList",
        data() {
            return {
                newsList: []
            }
        },
        created() {
          this.getNewsList()
        },
        methods: {
            getNewsList() {
                this.$http.get('http://www.liulongbin.top:3005/api/getnewslist').then(result=>{
                    if(result.body.status===0){
                        this.newsList=result.body.message

                    }else{
                        Toast('Get data failure!')
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mui-table-view {
        li {
            h1 {
                font-size: 14px;
                font-weight: bold;
            }

            .mui-ellipsis {
                font-size: 12px;
                color: #2b669a;
                display: flex;
                justify-content: space-between;
            }
        }
    }

</style>
