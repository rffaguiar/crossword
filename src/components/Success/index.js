import React from "react";
import _ from "lodash";
import cn from "classnames";

import css from "./style.scss";

class Success extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      didMount: false
    };
  }

  componentDidMount() {
    this.setState({
      didMount: true
    });
  }

  render() {
    return (
      <div className={cn(css.Success, { [css.showMe]: this.state.didMount })}>
        <h3>You finally did it.</h3>
        <h1>Now go back to work!</h1>
      </div>
    );
  }
}

export default Success;
