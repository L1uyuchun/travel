export default {
  changePlace(state,place) {
    state.city=place;
    try {
      sessionStorage.city=place
    }catch (e) {
      
    }
  }
}
