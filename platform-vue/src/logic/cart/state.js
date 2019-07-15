export default {
  cart: {
    model: 0,
    list: [
      {
        shopId: 100,
        shopName: '小米/米家自营',
        goodsId: 200,
        goodsName: '石墨烯腰带 尊享版 驼色 36',
        pic: 'http://yanxuan.nosdn.127.net/3e98de44fc6d6ebbb64277976eb34acf.png?imageView&thumbnail=160x0&quality=75',
        price: 142,
        number: 1
      },
      {
        shopId: 100,
        shopName: '小米/米家自营',
        goodsId: 201,
        goodsName: '尖头后绊带女高跟鞋',
        pic: 'http://yanxuan.nosdn.127.net/247fe34667b0b021422bfab065d0fb32.png?imageView&thumbnail=160x0&quality=75',
        price: 99,
        number: 2
      },
      {
        shopId: 101,
        shopName: '有品配送',
        goodsId: 202,
        goodsName: '乐贝尔（Lebeier） 婴儿学步车防侧翻多功能学步车',
        pic: '//img10.360buyimg.com/n4/jfs/t11764/65/466706779/413908/6b6af6c2/59f14f8cNe3aff51d.jpg',
        price: 451,
        number: 1
      }
    ],
    select: []
  },
  checkoutInfo:{
    checkedAddres:{
      id:0,
      userId:0,
      userName:"",
      telNumber:"",
      provinceName:"",
      cityName:"",
      countyName:"",
      detailInfo:"",
      is_default:0,
      full_region:""
    },
    checkedGoodsList:[{
      id: null,
      user_id: null,
      session_id: null,
      goods_id: 0,
      goods_sn: null,
      product_id: null,
      goods_name:0,
      market_price: null,
      retail_price: 0,
      retail_product_price: null,
      number: 1,
      goods_specifition_name_value: null,
      goods_specifition_ids: null,
      checked: null,
      crash_save_price: null,
      list_pic_url: ""
    }],
    goodsTotalPrice: 0
  }
}
