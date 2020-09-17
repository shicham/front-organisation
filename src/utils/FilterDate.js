import Vue from 'vue'

Vue.filter('formatDate', function(value,format) {
  console.log(format)
  if (value) {
    let arr = value.split("T")
    return arr[0]
  }
});
Vue.filter('formatDateTime', function(value,format) {
  console.log(format)
  if (value) {
    let arr = value.split("T")
    return arr[0]
  }
});