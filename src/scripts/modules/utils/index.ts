export const createElement = (template) => {
  const newElement = document.createElement('div')
  newElement.innerHTML = template
  return newElement.firstElementChild
}

export function occurrence(arr) {
  const obj = {}
  arr.forEach((el) => {
    obj[el] ? (obj[el] += 1) : (obj[el] = 1)
  })
  const val: number[] = Object.values(obj)
  const max = Math.max(...val)
  const key = Object.keys(obj).find((key) => obj[key] === max)

  if (key) {
    return parseInt(key) - 1
  }
}
