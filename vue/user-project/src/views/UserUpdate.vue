<template>
  <div class="container">
    <div class="row">
      <table class="table">
        <tr>
          <th class="text-right table-primary">No.</th>
          <td class="text-center">
              <input type="text" v-model="userInfo.user_no" readonly>
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">ID</th>
          <td class="text-center">
              <input type="text" v-model="userInfo.user_id" readonly>
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">Password</th>
          <td class="text-center">
              <input type="text" v-model="userInfo.user_pwd">
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">이름</th>
          <td class="text-center">
              <input type="text" v-model="userInfo.user_name">
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">성별</th>
          <td class="text-center">
              <input type="radio" v-model="userInfo.user_gender" value="M">남자
              <input type="radio" v-model="userInfo.user_gender" value="F">여자
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">나이</th>
          <td class="text-center">
          <input type="number" v-model="userInfo.user_age">                
          </td>
        </tr>
        <tr>
          <th class="text-right table-primary">가입일자</th>
          <td class="text-center"><input type="date" v-model="userInfo.join_date" readonly>
          </td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-success" @click="UpdateInfo">저장</button>
      <router-link to="/" class="btn btn-warning">취소</router-link>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data(){
    return {
      searchNo : '',
      userInfo : {}
    }
  },
  
  created(){
    this.searchNo = this.$route.query.userId;
    this.getUserInfo();
  },
  methods : {
    async UpdateInfo(){
                let data = {
                    "param" : this.userInfo,
                };
                let result
                = await axios(`/api/users/${this.userInfo.user_id}`, {
                    method : 'put',
                    headers : {
                        'content-Type' : 'application/json'
                    },
                    data : JSON.stringify(data)
                })
                .catch(err => console.log(err));
                // result = await axios.post('/api/users', data);
                console.log(result.data);
                if(result.data.changedRows == 0){
                    alert(`수정되지 않았습니다.\n메세지를 확인해주세요.\n${result.data.message}`);
                }else{
                    alert(`정상적으로 수정되었습니다.\nNo.${result.data.insertId}`);
                    this.$router.push({ name : 'userList'});
                }
    },
    async getUserInfo() {
      let result = await axios.get(`/api/users/${this.searchNo}`)
                              .catch(err => console.log(err));
      this.userInfo = result.data[0];
      let newDate = this.dateFormat(this.userInfo.join_date, 'yyyy-MM-dd');
      this.userInfo.join_date = newDate;
    },
    dateFormat(value, format){
      let date = new Date(value);
      let year = date.getFullYear();
      let month = ('0' + (date.getMonth() + 1)).slice(-2);
      let day = ('0' + date.getDate(format)).slice(-2);
      return `${year}-${month}-${day}`;
    },
  }

}
</script>