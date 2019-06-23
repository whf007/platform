export const getters = {
  navList: state => {
    let arr = [
      {
        id: 0,
        tag: 'recommend',
        name: '推荐'
      }
    ]
    for (let i = 0; i < state.channel.length; i++) {
      let item = {
        id: state.channel[i].id,
        tag: state.channel[i].tag,
        name: state.channel[i].name
      }

      arr.push(item)
    }
    return arr
  }
}
