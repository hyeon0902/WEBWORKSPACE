<template>
    <div class="container">
      <div class="row">
        <table class="table">
          <tr>
            <th class="text-right table-primary">ID</th>
            <td class="text-center">
                <input type="text" v-model="userInfo.user_id">
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
            <td class="text-center"><input type="date" v-model="userInfo.join_date">
            </td>
          </tr>
        </table>
      </div>
      <div class="row">
        <button class="btn btn-success" @click="insertInfo">저장</button>
        <router-link to="/" class="btn btn-warning">취소</router-link>
      </div>
    </div>
  </template>
<script>
import axios from 'axios';

    export default {
        data(){
            return {
                userInfo : {
                    user_id : 'test0',
                    user_pwd : '1234',
                    user_name : null,
                    user_gender : null,
                    user_age : 0,
                    join_date : null
                }
            }
        },
        created(){
            this.userInfo.join_date = this.getToday();
        },        
        methods : {
            async insertInfo(){
                if(!this.validation()) return;

                let data = {
                    "param" : this.userInfo,
                };
                let result
                = await axios(`/api/users`, {
                    method : 'post',
                    headers : {
                        'content-Type' : 'application/json'
                    },
                    data : JSON.stringify(data)
                })
                .catch(err => console.log(err));
                // result = await axios.post('/api/users', data);
                console.log(result.data);
                if(result.data.insertId == 0){
                    alert(`등록되지 않았습니다.\n메세지를 확인해주세요.\n${result.data.message}`);
                }else{
                    alert(`정상적으로 등록되었습니다.\nNo.${result.data.insertId}`);
                    this.$router.push({ name : 'userList'});
                }
            },
            getToday(){
                let today = new Date();
                let year = today.getFullYear();
                let month = ('0' + (today.getMonth() + 1)).slice(-2);
                let day = ('0' + today.getDate()).slice(-2);
                return `${year}-${month}-${day}`;
            },
            validation(){
                if(this.userInfo.user_id == ''){
                    alert('아이디가 입력되지 않았습니다.');
                    return false; 
                }
                if(this.userInfo.user_pwd == ''){
                    alert('비밀번호가 입력되지 않았습니다.');
                    return false;
                }

                return true;
            }
        }
    }
</script>