import React, {Fragment} from 'react';
import { Button } from 'antd';

const AntButton=({stylee}:any) => (
    <Fragment>
        <Button type="primary" className={stylee} >Primary Button</Button>
    </Fragment>
);
export default AntButton;