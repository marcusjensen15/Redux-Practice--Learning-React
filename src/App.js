// Map Redux state to component props

function mapStateToProps(state){
  return {
    countValue: state.count;
  };
}

//action

var increaseAction = { type:"increase"};
var decreaseAction = { type:"deacrease"};

//map redux actions to component props

function mapDispatchToProps(dispatch){
  return {
    increaseCount: function(){
      return dispatch(increaseAction);
    },
    decreaseCount: function(){

      return dispatch(decreaseAction);
    }
  };
}

//The HOC

var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps)(Counter);

  export default connectedComponent;
