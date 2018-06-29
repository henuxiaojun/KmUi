export default function (list, empty) {
  list = [].concat.call(list)
  let pinyin = '*ABCDEFGHJKLMNOPQRSTWXYZ'.split('')
  let zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('')
  let sortArray = []
  let curr
  pinyin.forEach((letter, index1) => {
    curr = {
      letter: letter,
      data: []
    }
    list.forEach((item) => {
      let sub = item.substr(0, 1)
      if ((!zh[index1 - 1] || zh[index1 - 1].localeCompare(sub, 'zh') <= 0) && sub.localeCompare(zh[index1], 'zh') === -1) {
        curr.data.push(item)
      }
    })
    if (empty || curr.data.length) {
      sortArray.push(curr)
      curr.data.sort((a, b) => {
        return a.localeCompare(b, 'zh')
      })
    }
  })
  return sortArray
}
