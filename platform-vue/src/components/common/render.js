export default {
  functional: true,
  props: ['render'],
  datainfo:{},
  click:function(){

  },
  render: (h, ctx) => {
    return ctx.props.render(h);
  }

}
