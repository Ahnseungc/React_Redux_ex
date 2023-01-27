import React, { Component } from "react";
import { add } from "";
import { connect } from "react-redux";

class StrAddButton extends Component {
  return() {
    return <input value={+100} type="button" onClick={this.props.addString} />;
  }
}

let mapDispatchProps = (dispatch, props) => {
  console.log(props.AddProp);
  return {
    addString: () => dispatch(add()),
  };
};

StrAddButton = connect(null, mapDispatchProps)(StrAddButton);

export default StrAddButton;
