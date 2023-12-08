<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>사원번호</th>
                    <th>부서번호</th>
                    <th>부서이름</th>
                    <th>이름</th>
                    <th>성별</th>
                    <th>급여</th>
                    <th>입사일자</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="index" v-for="(emp,index) in empList"
                @click="goToEmpInfo(emp.emp_no)">
                    <td>{{ emp.emp_no }}</td>
                    <td>{{ emp.dept_no }}</td>
                    <td>{{ emp.dept_name }}</td>
                    <td>{{ emp.first_name + ' ' + emp.last_name }}</td>
                    <td>{{ emp.gender == 'M' ? '남' : '여' }}</td>
                    <td>{{ emp.salary }}</td>
                    <td>{{ dataFormat(emp.hire_date) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';
// const axios = require('axios').default;

export default {
	data() {
		return {
			empList: [],
		};
	},
	created() {
        this.getEmpList();
	},
	methods: {
		async getEmpList() {
			let result = await axios.get('/api/emps').catch((err) => {
				console.log(err);
			});
			let list = result.data;
			this.empList = list;
		},
        goToEmpInfo(id){
            this.$router.push({ path : '/empInfo', query : { eno : id }})
        },
	},
};
</script>
<style>
table {
  border-collapse: collapse;
  width: 100%;
  margin: 1rem auto;
  background-color: white;
}

thead{
  box-shadow: 4px 4px 10px rgba(0,0,0,0.1);
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