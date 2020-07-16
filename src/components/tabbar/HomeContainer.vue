<template>
    <div>
        <!--            Image Area-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imgList" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!--            Grid Layout-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
                <img src="https://static.easyicon.net/preview/126/1269536.gif" alt="">
                <div class="mui-media-body">News</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="https://static.easyicon.net/preview/122/1223609.gif" alt="">
                <div class="mui-media-body">Photo</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="https://static.easyicon.net/preview/128/1287745.gif" alt="">
                <div class="mui-media-body">Order</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="https://static.easyicon.net/preview/128/1286722.gif" alt="">
                <div class="mui-media-body">Feedback</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="https://static.easyicon.net/preview/127/1274422.gif" alt="">
                <div class="mui-media-body">Video</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="https://www.easyicon.net/api/resizeApi.php?id=1250880&size=128" alt="">
                <div class="mui-media-body">Phone</div></a></li>

        </ul>


    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    export default {
        name: "HomeContainer",
        data() {
    return {
        imgList: []
    }
        },
        created() {
            this.getImage()
        },
        methods: {
            getImage() {
                this.$http.get('data/getlunbo.json').then(result => {

                    if(result.body.status===0){
                        this.imgList=result.body.message

                    }else {
                        Toast('Load images failure!')
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .mint-header{
        height: 60px;
    }
    .mint-header-title{
        font-size: 25px;
        font-weight: 600;
    }
    .mint-swipe {
        height: 200px;

        .mint-swipe-item {
            &:nth-child(1) {
                background-color: #28c770;
            }

            &:nth-child(2) {
                background-color: #9d28c7;
            }

            &:nth-child(3) {
                background-color: #d47118;
            }

            img{
                width: 100%;
                height: 100%;
            }


        }
    }


    .mui-grid-view.mui-grid-9{
        background-color: white;
        border: none;
        img{
            width: 60px;
            height: 60px;
        }
    .mui-media-body{
        font-size: 13px;
    }

    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: 0;
    }

</style>
