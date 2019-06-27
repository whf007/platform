<template>
  <div class="goods-spec">
    <div v-for="(item,index) in specificationList" v-if="index==0">
    <goods-cell title="规格：" @click.native="updateGoodsSpec" >
      <span>{{item.valueList[0].value}} </span>
    </goods-cell>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import goodsCell from './common/goods-cell'
import goodsSpecPanel from './goods-spec-panel'
export default {
  components: {
    goodsCell,
    goodsSpecPanel
  },
  props: ['specificationList','datainfo'],
  methods: {
    updateGoodsSpec () {
      this.$mPopup({
        mask: false
      }, (h) => {
        return h(goodsSpecPanel,{props:{
          datainfo:this.datainfo
        },
          on: {
            click: this.clickHandler
          },
        })
      })
    },
    clickHandler (o) {
      this.$emit('click', o)
    }
  }
}
</script>

<style lang="less" scoped>
  .goods-spec{
    margin-bottom:10px;
    background: white;
  }
</style>
