export const getters = {
  navList: state => {
    let arr = [
      {
        id: 0,
        tag: 'recommend',
        name: '推荐'
      }
    ]
    for (let i = 0; i < state.categoryList.length; i++) {
      let item = {
        id: state.categoryList[i].id,
        tag: state.categoryList[i].tag,
        name: state.categoryList[i].title
      }

      arr.push(item)
    }
    return arr
  }
}
