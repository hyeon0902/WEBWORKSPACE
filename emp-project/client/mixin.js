export default {
    data() {
      return {
        
      }
    },
    created: function () {
      console.log('Mixin')
    },
    methods: {
        dataFormat(value) {
			let date = new Date(value);
			let year = date.getFullYear();
			let month = ('0' + (date.getMonth() + 1)).slice(-2);
			let day = ('0' + date.getDate()).slice(-2);

			return `${year}년 ${month}월 ${day}일`;
		}
    },
  }
  