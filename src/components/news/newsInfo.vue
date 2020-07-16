<template>
    <div class="newsInfo-container">
        <h3 class="title">{{ newsInfo.title}}</h3>
        <p class="sub-title">
            <span>Add time:{{newsInfo.add_time | dataFormat}}</span>
            <span>Click:{{newsInfo.click}}</span>
        </p>

        <hr>
<!--content area-->
        <div class="content" v-html="newsInfo.content"></div>

<!--        comment area-->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
    //import comment sub-component
    import comment from "../subcomponents/comment.vue";

    import Toast from 'mint-ui'
    export default {
        name: "newsInfo",
        data(){
            return {
                id: this.$route.params.id,
                newsInfo: {}
            }
        },
        created() {
            this.getNewsInfo()
        },
        methods: {
            getNewsInfo(){
                this.$http.get('http://www.liulongbin.top:3005/api/getnew/'+this.id).then(result=>{
                    if(result.body.status===0){
                        this.newsInfo=result.body.message[0];
                    }else {
                        Toast('Get news-info failure')
                    }
                })
            }
        },
        components: {
            'comment-box': comment
        }


    }
</script>

<style lang="scss" >

.newsInfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .sub-title{
        font-size: 13px;
        color: #2c32b6;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>
