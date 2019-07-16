<template>
  <div class="checkout-address-top">
    <p>配送至：{{address.provinceName}} {{address.cityName}} {{address.countyName}} {{address.detailInfo}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: ['address']
  }
</script>
<style lang="less" scoped>
  .checkout-address-top{
    display: flex;
    align-items: center;
    height: 63px;
    padding-left:28px;
    background: #fcf9c4;
    p{
      color:#666;
    }
  }
</style>
