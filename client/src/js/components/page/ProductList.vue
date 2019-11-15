<template>
<div>
    <div><el-button v-if="roleCheck" @click="addProduct">상품 추가</el-button></div>
    <div class="product-wrapper" v-for="(coffee,index) in coffeeList" :key="index" @click="productDetail(coffee.no)">
        <img v-if="coffee.image" class="product-img" :src="require('@/upload'+coffee.image)">
        <img class="product-img" v-else src="@/upload/default.gif" alt="">
        <div class="product-info">
            <div class="info product-name">{{coffee.name}}</div>
            <div class="info product-price">{{coffee.price}}원</div>
            <div class="info product-quantity">{{coffee.quantity}}잔 남음</div>
        </div>
    </div>

</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      coffeeList: (state) => state.coffee.coffeeList,
      session: (state) => state.user.session
    }),
    roleCheck () {
      return this.session.role === 'manager'
    }
  },
  methods: {
    ...mapActions(['getCoffeeList', 'getCoffeeDetail']),

    productDetail (no) {
      console.log(no)
      let coffee = {
        no,
        name: '',
        content: '',
        price: 0,
        image: '',
        date: '',
        quantity: 0
      }
      this.getCoffeeDetail(coffee).then((res) => {
        this.$router.push('/product-detail')
      })
    },
    addProduct () {
      this.$router.push('/addProduct')
    }
  },
  created () {
    this.getCoffeeList()
  }

}
</script>

<style>
    .product-wrapper{
        width:300px;
        display: inline-block;
        border:1px solid black;
        margin:5px;
        cursor:pointer;
    }
    .product-wrapper:hover{
        background-color: #eee
    }
    .product-img {
        width: 150px;
        height: 150px;
        display: inline-block;
        vertical-align: middle;
        margin:10px;
    }
    .product-info {
        display:inline-block;
        padding: 10px;
    }
    .product-name {
        font-size: 21px;
    }
    .info {
        margin:5px
    }

</style>
