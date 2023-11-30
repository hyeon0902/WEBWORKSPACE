<template>
    <div>
        <h1>{{ title + ' !!!' }}</h1>
        <h2 v-bind:name="'sample'" v-text="title" />
        <p v-html="tagList" />
        <p v-text="tagList" />
        <hr>
        <input type="text" v-model="valueModel">
        <p>{{ typeof valueModel }}</p>
        <input type="number" v-model.lazy="numberModel">
        <p>{{ numberModel + 10000 }}</p>       
        <hr>
        <p>일품 메뉴 고르기</p>
        <select v-model="selected">
            <option disabled value="">다음 중 하나를 선택하세요</option>
            <option>뚝배기 두루치기 8,000원</option>
            <option>한우 소머리 국밥 10,000원</option>
            <option>소 내장탕 8,000원</option>
            <option>돼지 국밥 7,000원</option>
            <option>순대 국밥 7,000원</option>
            <option>모듬 국밥 8,000원</option>
        </select>
        <p />
        <p>{{ selected }}</p>
        <hr>
        <select v-model="selectModel">
            <option value="spring">봄</option>
            <option value="summer">여름</option>
            <option value="fall">가을</option>
            <option value="winter">겨울</option>
        </select>
        <p>{{ selectModel }}</p>
        <textarea v-model="textModel" />
        <hr>
        <input type="checkbox" v-model="chData" true-value="여" false-value="부">
        <p>{{  chData }}</p>
        <div>
            <input type="checkbox" v-model="city" value="서울">
            <input type="checkbox" v-model="city" value="대전">
            <input type="checkbox" v-model="city" value="대구">
        </div>
        <p>{{ city }}</p>
</div>
</template>
<script>
    export default {
        data(){
            return {
                title : 'Hello, Vue.js',
                tagList : '<strong>Today is ...</strong>',
                valueModel : 'Korea',
                numberModel : 0,
                selected : '',
                selectModel : 'winter',
                textModel : '백견불여일타',
                chData : '',
                city : []
            }
        }
    }
</script>