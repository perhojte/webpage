import * as React from "react";
import { FormattedDate } from "./FormattedDate"

interface Props { }
interface State {
  date: Date;
}

export class Clock extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { date: new Date() }
  }

  timerID: number;
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
