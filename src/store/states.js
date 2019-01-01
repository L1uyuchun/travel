let defaultPlace='北京'
try {
  if(sessionStorage.city){
    defaultPlace=sessionStorage.city
  }
}catch (e) {

}
export default {
  city: defaultPlace
}
