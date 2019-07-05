<template>
  <div class="goods-spec-panel">
    <div class="panel-goods">
      <div class="goods-img">
        <img src="https://shop.io.mi-img.com/app/shop/img?id=shop_5f926ad08c9604219568908eafc90a8e.jpeg" alt="">
      </div>
      <div class="goods-info">
        <div class="info-name">
          <p>{{datainfo.info.name}}</p>
        </div>
        <div class="info-price">
          <span>￥{{datainfo.productList[0].market_price}} <br>￥{{datainfo.productList[1].retail_price}} </span>
        </div>
      </div>
    </div>
    <div class="panel-section" ref='cvs' v-for="(item,index) in datainfo.specificationList">
      <div class="section-title">
        <span>{{item.name}}</span>
      </div>
      <div class="section-content">
        <span v-for="inItem in item.valueList" @click="selectProduct(datainfo,index,inItem.id,$event)"
              :partner-id="item.id" :data-id="inItem.id">{{inItem.value}}</span>
      </div>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        products: [],
        info: [],
        datamessage:['','','','','']
      }
    },
    props: ['click', 'datainfo'],
    methods: {
      selectProduct (datainfo, index, id, event) {
        // 灰色不能点击
        if (event.originalTarget.className.indexOf("selectType") == -1) {
          var sil = event.originalTarget.parentNode.children;

          for (var i = 0; i < sil.length; i++) {
            if (sil[i].className.indexOf("selectType") == -1)
              sil[i].className = "";
          }
          if (event.originalTarget.className.indexOf("selectOne") != -1) {
            event.originalTarget.className = "";
          } else {
            event.originalTarget.className = "selectOne"
            this.datamessage[index]=id;
          }
        } else {
          return;
        }

        if (this.products.length == 0) {
          this.products = datainfo.productList;
          for (var i = 0; i < this.products.length; i++) {
            var product = this.products[i];
            this.info.push(product.goods_specification_ids)
          }
        }
        var selectont = this.selectStyle(id);
        let select = this.$refs.cvs;
        for (var i = 0; i < select.length; i++) {

          var content = select[i].getElementsByClassName("section-content");
          for (var j = 0; j < content.length; j++) {
            var pancontent = content[j].childNodes;
            for (var l = 0; l < pancontent.length; l++) {
              // 获取span 属性值
              if (index == i) {
                if (pancontent[l].className.indexOf("selectOne") != -1) {
                  continue;
                }
                if (pancontent[l].className.indexOf("selectType") == -1)
                  pancontent[l].className = "";
                continue;
              }
              if (selectont.indexOf(pancontent[l].getAttribute("data-id")) == -1) {
                if (pancontent[l].className.indexOf("selectType") == -1) {
                  pancontent[l].className = "selectType"
                }
              } else {
                if (pancontent[l].className.indexOf("selectOne") == -1)
                  pancontent[l].className = "";
              }
            }
          }
        }
        console.log(this.datamessage)
        this.$emit('click', {id: this.datamessage})
      },
      selectStyle(value){
        var contion = "";
        for (var i = 0; i < this.info.length; i++) {
          if (this.info[i].indexOf(value) != -1) {
            contion = contion + this.info[i];
          }
        }
        return contion;
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../static/less/index';

  .goods-spec-panel {
    min-height: 700px;
    padding: 0 27px;
    background: white;

  .panel-goods {
    display: flex;
    align-items: center;
    padding: 27px 0;

  .goods-img {
    flex-basis: 127px;
    height: 127px;

  img {
    height: 100%;
    width: 100%;
  }

  }
  .goods-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;

  .info-name {

  p {
    font-size: 28px;
  }

  }
  .info-price {

  span {
    font-size: 34px;
    font-weight: 600;
    color: #b6090b;
  }

  }
  }
  }
  .panel-section {

  .section-title {
    display: flex;
    align-items: center;
    height: 62px;

  span {
    font-size: 28px;
    color: #666;
  }

  }
  .section-content {
    display: flex;
    padding: 20px 0;

  span {
    flex-grow: 0;
    height: 50px;
    line-height: 50px;
    padding: 0 22px;
    margin: 0 20px 20px 0;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid @border-color;
    font-size: 28px;
    color: #666;
  }

  }
  .selectType {
    background-color: #ddd;
  }

  .selectOne {
    background-color: #28FF28;
  }

  }
  }
</style>
