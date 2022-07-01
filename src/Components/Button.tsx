import React, { Fragment } from "react";
import { Button } from "antd";

type Props = {
  stylee: string;
};
const AntButton = ({ stylee }: Props) => (
  <Fragment>
    <Button type="primary" className={stylee}>
      Primary Button
    </Button>
  </Fragment>
);
export default AntButton;
