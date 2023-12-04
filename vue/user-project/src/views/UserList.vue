<template>
  <div class="container">
    <table class="table">
      <caption>Total : {{ count }}</caption>
      <thead>
        <tr>
          <th>No.</th>
          <th>ID</th>
          <th>이름</th>
          <th>성별</th>
          <th>나이</th>
          <th>가입날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="idx" v-for="(user, idx) in userList"
            @click="goToUserInfo(user.user_id)">
          <td>{{ user.user_no }}</td>
          <td>{{ user.user_id }}</td>
          <td>{{ user.user_name }}</td>
          <td>{{ user.user_gender }}</td>
          <td>{{ user.user_age }}</td>
          <td>{{ dateFormat(user.join_date, 'yyyy년MM월dd일') }}</td>
        </tr>
      </tbody>
    </table>
    <div class="row">
      <router-link to="/userInsert" class="btn btn-secondary">등록</router-link>.
      
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data(){
    return {
      userList : []
    }
  },
  computed : {
    count(){
      return this.userList.length;
    }
  },
  created(){
    // 컴포넌트가 초기화할 데이터관련 진행
    this.getUserList();
  },
  methods : {
    async getUserList(){
      let result = await axios.get('/api/users') //http://localhost:3000/api/tusers
                        .catch(err => {
                          console.log(err);
                        });
      let list = result.data;
      this.userList = list;
    },
    goToUserInfo(id){
      this.$router.push({ path : '/userInfo', query : { userId : id } });
      // name : route로 등록할 때 사용한 name 속성
      // params : path 속성이 '/target/:id' 일때 { 'id' : 100 }
    },
    dateFormat(value, format){
      //yyyy년MM월dd일
      let date = new Date(value);
      let year = date.getFullYear();
      let month = ('0' + (date.getMonth() + 1)).slice(-2);
      let day = ('0' + date.getDate()).slice(-2);

      let result = format.replace('yyyy', year)
                          .replace('MM', month)
                          .replace('dd',day);
      return result;

      //return `${year}년${month}월${day}일`;
    }
  }
}
</script>
