<template>
  <div class="goods-info">
    <div class="info-name">
      <h4>{{info.name}}</h4>
    </div>
    <div class="info-desc">
      <p>{{info.goods_brief}}</p>
    </div>
    <div class="info-price">
      <div class="price-pay">
        <span>￥</span>
        <span>{{info.market_price}}</span>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: ['info']
  }
</script>
<style lang="less" scoped>
  .goods-info{
    padding:28px;
    margin-bottom: 10px;
    background: white;
    .info-name{
      h4{
        font-size: 34px;
        font-weight: 600;
        color:#333;
      }
    }
    .info-desc{
      padding:20px 0;
      p{
        color:#666;
      }
    }
    .info-price{
      .price-pay{
        display: flex;
        align-items: flex-end;
        span{
          &:nth-child(1){
            color:#b60a0a;
          }
          &:nth-child(2){
            font-size: 40px;
            font-weight: 600;
            color:#b60a0a;
          }
        }
      }
    }
  }
</style>
