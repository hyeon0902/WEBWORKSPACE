<template>
    <div>
        <form>
            <label>제품id:
                <input type="text" v-model="productInfo.product_id">
            </label><br>
            <label>제품명:
                <input type="text" v-model="productInfo.product_name">
            </label><br>
            <label>카테고리:
                <input type="radio" value="A" v-model="productInfo.category"> A
                <input type="radio" value="B" v-model="productInfo.category"> B
            </label><br>
            <label>금액:
                <input type="text" v-model="productInfo.product_price">
            </label><br>
            <button type="button" @click="addCart">추가</button>
        </form>
        <table border="2">
            <thead>
                <caption>total : {{  total }}</caption>
                <tr>
                    <th>카테고리</th>
                    <th>제품ID</th>
                    <th>제품명</th>
                    <th>가격</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="idx" v-for="(info, idx) in productList">
                    <td>{{ info.category }}</td>
                    <td>{{ info.product_id }}</td>
                    <td>{{ info.product_name }}</td>
                    <td>{{ info.product_price }}원</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
//StoreComponent.vue

export default {
    data(){
        return {
            productInfo: {
                product_id : '',
                product_name : '',
                category : 'A',
                product_price : ''
            }
        }
    },
    computed : {
        productList(){
            return this.$store.state.cart;
        },
        total(){
            return this.$store.getters.cartCount;
        }
    },
    methods : {
        addCart(){
                let obj = {
                    product_id : this.productInfo.product_id,
                    product_name : this.productInfo.product_name,
                    category : this.productInfo.category,
                    product_price : this.productInfo.product_price
                }
                //this.$store.commit('addProduct', obj);
                this.$store.dispatch('addProduct', obj);
            }
        }
    }
</script>