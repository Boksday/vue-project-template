<template>
    <div>
        <div class="title">판매 내역</div>

        <div class="history-wrapper">
            <el-table class="table" style="width:100%" :data="histories.data">
                <el-table-column label="구매일시" prop="date"></el-table-column>
                <el-table-column label="유저 ID" prop="id"></el-table-column>
                <el-table-column label="총 금액" prop="price"></el-table-column>
                <el-table-column label="상품번호" prop="product_no"></el-table-column>
                <el-table-column label="구매 수량" prop="quantity"></el-table-column>
                <el-table-column label="샷 추가"  prop="shot"></el-table-column>
                <el-table-column label="휘핑크림 추가" prop="cream"></el-table-column>
                <el-table-column label="핫/아이스" prop="ice"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      histories: (state) => state.history.histories
    })
  },
  methods: {
    ...mapActions(['getAllHistory'])
  },
  created () {
    this.getAllHistory()
  }
}
</script>

<style>
    .history-wrapper {
        padding: 20px;
        width:100%;
    }
    .title {
        padding: 20px;
    }
.table{
    width:100%
}
</style>
