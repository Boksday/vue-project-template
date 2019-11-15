<template>
    <div>
        <div class="wrapper coffe-wrapper">
            <img class="coffee-img" v-if="coffee.image" :src="require('@/upload'+coffee.image)">
            <div class="coffee-info">
                <div class="info coffee-name">{{coffee.name}}</div>
                <div class="info coffee-price">{{coffee.price}}원</div>
                <div class="info coffee-stock">{{coffee.quantity}}잔 남음</div>
                <div class="info coffee-date">{{coffee.date}} 등록</div>
            </div>
        </div>
        <img class="soldout-img" v-if="coffee.quantity<=0" src="@/upload/soldout.png" width="450px" height="250px">
        <div v-else class="wrapper order-option-wrapper">
            <div class="option">
                주문 수량 : <el-input-number  v-model="quantity" :min="1" :max="coffee.quantity"></el-input-number>
            </div>
            <div class="option">
                아이스/핫 :
                <el-radio-group v-model="ice">
                    <el-radio-button label="Hot"></el-radio-button>
                    <el-radio-button label="Ice"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="option" >
                샷추가 여부 :
                <el-radio-group v-model="shot">
                    <el-radio-button label="X"></el-radio-button>
                    <el-radio-button label="O"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="option">
                휘핑크림 여부 :
                <el-radio-group v-model="cream">
                    <el-radio-button label="X"></el-radio-button>
                    <el-radio-button label="O"></el-radio-button>
                </el-radio-group>
            </div>
            <div class="option">
                총 금액 : {{totalPrice}} 원
            </div>
            <div class="shopping-button"> <el-button @click="buy" :disabled="stockCheck" >구매</el-button></div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      coffee: (state) => state.coffee.coffee,
      session: (state) => state.user.session,
      options: (state) => state.coffee.options
    }),
    totalPrice () {
      let icePrice = this.ice === 'Ice' ? 500 : 0
      let shotPrice = this.shot === 'O' ? 1000 : 0
      let creamPrice = this.cream === 'O' ? 500 : 0

      return this.quantity * (icePrice + shotPrice + creamPrice) + (this.quantity * this.coffee.price)
    },
    stockCheck () {
      return this.coffee.quantity < 1
    }
  },
  data () {
    return {
      quantity: 1,
      ice: 'Hot',
      shot: 'X',
      cream: 'X',
      shoppingList: [],
      optionCheck: []
    }
  },
  methods: {
    ...mapActions(['buyCoffee', 'getCoffeeDetail']),

    buy () {
      let buy = {
        id: this.session.id,
        product_no: this.coffee.no,
        shot: this.shot,
        cream: this.cream,
        ice: this.ice === 'Ice' ? 'O' : 'X',
        price: this.totalPrice,
        quantity: this.quantity,
        date: null
      }
      if (confirm('정말로 구매하시겠습니까? ')) {
        this.buyCoffee(buy).then((res) => {
          this.$router.push('/product-list')
        })
      }
    }
  },
  created () {
    let coffee = {
      no: 0,
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
  }
}
</script>

<style>
    .coffee-img {
        width: 250px;
        height: 250px;
        display: inline-block;
        vertical-align: top
    }
    .coffee-info {
        display: inline-block;
        padding: 20px;
    }
    .coffee-name {
        font-size: 21px;
    }
    .info {
        margin:8px;
    }
    .wrapper {
        margin : 10px;
    }
    .option {
        margin:10px;
    }
    .soldout-img{
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
</style>
