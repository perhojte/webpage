import * as React from "react";

interface Props {
  date: Date;
}

export function FormattedDate(props: Props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}
