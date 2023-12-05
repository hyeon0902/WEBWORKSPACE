<template>
    <div>
        <PageTitle title="Hello, world!"/>
        <!-- <PageContent :title="header" 
                    v-bind:count="10" 
                          :writer="['Adward']" 
                          :regdate="'2023-12-05'" 
                          :content="{ first : 'Node.js', Second: 'Vue.js'}" /> -->
        <PageContent v-bind="info" @update-info="handler" />
        <RefCom ref="child"/>
        <button @click="childHandler">자식 제어</button>
    </div>
</template>
<script>
//PropsComponent.vue
import PageTitle from './PageTitle.vue'
import PageContent from './PageComponent.vue'
import RefCom from './RefComponent.vue'

export default {
    data(){
        return{
            header : '예담직업전문학교',
            info : {
                title : 'Today is',
                count : '',
                writer : 'Adward',
                regdate : '2023-12-05',
                content : '내용 없음'
            }
        }
    },
    components : {
        PageTitle,
        PageContent,
        RefCom
    },
    methods : {
        handler(value){
            alert(value);
        },
        childHandler(){
            this.$refs.child.content = '부모가 보내는 데이터';
            this.$refs.child.plusCount();
        }
    }
}
</script>