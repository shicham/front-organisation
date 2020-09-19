import Vue from 'vue'

Vue.filter('substrin', function(value,num) {
  console.log(num)
  if (value) {
    value = value.toUpperCase()
    let arr = value.split(" ")
    if(arr.lenght>1){
      return arr[0].substring(0,1)+arr[1].substring(0,1)
    }
    return arr[0].substring(0,2)
  }
});