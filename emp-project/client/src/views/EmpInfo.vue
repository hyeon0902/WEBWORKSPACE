<template>
    <div class="container">
    <div class="row">
      <table class="table">
        <tr>
            <th>사원번호</th>
            <td>{{ empInfo.emp_no }}</td>
        </tr>
        <tr>
            <th>부서번호</th>
            <td>{{ empInfo.dept_no }}</td>
        </tr>
        <tr>
            <th>부서이름</th> 
            <td>{{ empInfo.dept_name }}</td>
        </tr>
        <tr>
            <th>이름</th>
            <td>{{ empInfo.first_name + ' ' + empInfo.last_name }}</td>
        </tr>
        <tr>
            <th>성별</th>
            <td>{{ empGenger }}</td>
        </tr>
        <tr>
            <th>급여</th>
            <td>{{ empInfo.salary }}</td>
        </tr>
        <tr>
            <th>입사일자</th>
            <td>{{ dataFormat(empInfo.hire_date) }}</td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-info" @click="goToUpdate(empInfo.emp_no)">수정</button>
      <router-link to="/empList" class="btn btn-success">목록</router-link>
      <button class="btn btn-warning" @click="deleteInfo(empInfo.emp_no)">퇴사</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
    data(){
        return {
            searchNo : '',
            empInfo : {},
            today: '',
        }
    },
    created(){
        this.searchNo = this.$route.query.eno;
        this.getEmpInfo();
    },
    computed : {
        empGenger(){
            return this.empInfo.gender == 'M' ? '남' : '여';
        }
    },
    methods : {
        async getEmpInfo(){
            let result = await axios.get(`/api/emps/${this.searchNo}`)
                                    .catch(err => console.log(err));
            this.empInfo = result.data[0];
        },
        async deleteInfo(eno) {
                let data = {
                  param: {
                    to_date: '2023-12-07',
                  },
                };
                let result = await axios.delete(`/api/emps/${eno}`, { data: data }).catch((err) => console.log(err));
                let count = result.data.affectedRows;
                if (count == 0) {
                  alert('퇴사가 처리되지 않았습니다.');
                } else {
                  alert('퇴사처리 되었습니다.');
                  this.$router.push({ name: 'empList' });
                }
        },
        goToUpdate(no){
          this.$router.push({ path : '/empForm', query : { eno : no }});
        }
  }
}
</script>
<style>
table {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem auto;
  background-color: white;
}


/* 테이블 행 */
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

th {
  padding: 8px;
  text-align: left;
  text-align: center;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  color: #000;
}

/* 테이블 올렸을 때 */
tbody tr:hover {
  background-color: #d3d3d3;
  opacity: 0.9;
  cursor: pointer;
}


th, td {
  border-left: none;
  border-right: none;
}
</style>