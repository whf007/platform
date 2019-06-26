export default {
  functional: true,
  props: ['render','mask'],
  render: (h, ctx) => {
  let s = ctx.props.render(h,ctx.props.mask);
  console.log(s)
    return s;
  }

}
