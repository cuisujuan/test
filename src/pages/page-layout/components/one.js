function doIt(n) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(n)
    }, 1000)
  })
}
function step1(n) {
  console.log("执行1")
  return doIt(n)
}
function step2(n) {
  console.log("执行2")
  return doIt(n)
}
async function text() {
  try {
    const one = await step1(1);
    const result = await step2(one);
    console.log("result", result)
  } catch (err) {
    console.log(err)
  }

}
text()