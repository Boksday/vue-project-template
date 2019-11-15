<template>
    <div>
        <div class="input-wrapper">
        <div class="pond">
            <file-pond
            class="file-input"
            name="file"
            ref="pond"
            label-idle="상품이미지를 등록해주세요."
            accepted-file-types="image/jpeg, image/png"
            server="http://localhost:8090/image"
            v-bind:files="fileImg"
            v-on:init="handleFilePondInit"
            v-model="fileImg"> dd</file-pond>
        </div>

        <img class="product-image" v-if="fileImg[0]" :src="require('@/upload'+fileImgUrl)" alt="기본이미지" width="200px" height="200px">
            <div class="input name-input">
                <el-input v-model="name" placeholder="상품명을 입력하세요"></el-input>
            </div>

            <div class="input content-input">
                <el-input v-model="content" type="textarea" placeholder="상품설명을 입력하세요"></el-input>
            </div>

            <div class="input price-input">
               재고 <el-input-number v-model="quantity" :min="0" :step="1"  plcaeholder="상품갯수를 입력하세요"></el-input-number>
            </div>

            <div class="input price-input">
               가격 <el-input-number v-model="price" :min="0" :step="100" plcaeholder="상품가격을 입력하세요"></el-input-number>
            </div>

            <div class="checkboxes">선택가능 옵션
                <el-checkbox-group v-model="optionCheck">
                    <el-checkbox-button v-for="(option,index) in options" :label="option.value" :key="index">{{option.name}}</el-checkbox-button>
                </el-checkbox-group>
            </div>

            <el-button @click="add"> 상품 추가하기 </el-button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import vueFilePond from 'vue-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'

const FilePond = vueFilePond(FilePondPluginFileValidateType)

export default {
  components: {
    FilePond
  },
  data () {
    return {
      fileImg: '',
      image: '',
      name: '',
      price: 0,
      content: '',
      quantity: 0,
      options: [
        { name: '핫/아이스', value: 'ice' },
        { name: '휘핑크림', value: 'cream' },
        { name: '샷추가', value: 'shot' }
      ],
      optionCheck: []
    }
  },
  methods: {
    ...mapActions(['addCoffee']),
    add () {
      if (confirm('정말로 상품을 등록하시겠습니까?')) {
        let product = {
          product_no: null,
          name: this.name,
          price: this.price,
          content: this.content,
          quantity: this.quantity,
          image: this.fileImgUrl,
          date: null
        }
        this.addCoffee(product).then((res) => {
          this.$router.push('/product-list')
        })
      }
    },
    handleFilePondInit () {

    }
  },
  computed: {
    fileImgUrl () {
      console.log(this.fileImg[0].serverId)
      return this.fileImg === null ? '/default.png' : this.fileImg[0].serverId
    },
    priceValid () {
      return this.price < 0 ? 0 : this.price
    }
  }
}
</script>

<style>
    .input {
        width: 50%;
        margin:10px;
    }
    .input-wrapper{
        padding:50px;
    }
    .checkboxes{
        margin : 50px 0;
    }
    .filepond--wrapper{
        cursor:pointer;
        border:1px #e1e1e1 solid;
    }
    .filepond--root{
        margin: 0;
    }
    .pond{
        width:50%;
    }
    .product-image {
        margin:25px;
    }
</style>
