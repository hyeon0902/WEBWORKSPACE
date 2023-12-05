// store.js
import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            cart : [
                {
                    product_id : 1,
                    product_name : "아이폰 거치대",
                    category : "A",
                    product_price : 23000
                }
            ],
            count : 0
        }
    },
    getters : {
        cartCount : (state)=>{
            return state.cart.length;
        }
    },
    mutations : { // 동기식
        increment(state){
            state.count++
        },
        addProduct(state, info){
          state.cart.push(info);  
        }
    },
    // actions : {
    //     addProduct(state, info){
    //         state.commit('addProduct')
    //     }
    // }
})

export default store;