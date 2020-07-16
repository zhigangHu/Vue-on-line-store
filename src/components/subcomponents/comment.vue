<template>
    <div class="cmt-container">
        <h3>Comments</h3>
        <hr>
        <textarea placeholder="Please input comments(No more than 120 words)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">Post Comment</mt-button>
        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time ">
                <div class="cmt-title">
                    No.{{ i+1 }}&nbsp;comment:&nbsp;&nbsp;User: {{item.user_name}}&nbsp;&nbsp;Add-time:{{item.add_time|dataFormat}}
                    <div class="cmt-body">{{item.content==='undefined'?'This is a lazy user':item.content}}</div>
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">Load More</mt-button>


    </div>
</template>

<script>
    import Toast from "mint-ui";

    export default {
        name: "comment",
        data(){
            return {
                pageIndex: 1,
                comments: []
            }
        },
        created() {
            this.getComments()
        },
        methods: {
            getComments(){
                this.$http.get('http://www.liulongbin.top:3005/api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(result=>{
                    if(result.body.status===0){
                        // this.comments=result.body.message;
                        this.comments=this.comments.concat(result.body.message)
                    }else {
                        Toast('Get comments failure')
                    }
                })
            },
            getMore(){
                this.pageIndex++
                this.getComments()
            }
        },
        props:["id"]
    }
</script>

<style lang="scss" scoped>
    .cmt-container{
        h3{
            font-size: 18px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 10px 0px;
            .cmt-item{
                font-size: 13px;

                .cmt-title{
                    background-color: #cccccc;
                    line-height: 30px;
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }
    }

</style>
