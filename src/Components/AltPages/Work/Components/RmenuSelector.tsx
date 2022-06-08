import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Select } from 'antd';


const { Option } = Select;

interface hi{
    option?: any,
    optionA?: any,
    optionB?:any,
}

const Selector:hi = () => (
    <Select
        showSearch
        style={{
            width: "100%",
        }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input, option) => option.children.includes(input)}
        filterSort={(optionA, optionB) =>
            optionA.children.toLowerCase() .localeCompare(optionB?.children?.toLowerCase())
        }
    >
        <Option value="1">Not Identified</Option>
        <Option value="2">Closed</Option>
        <Option value="3">Communicated</Option>
        <Option value="4">Identified</Option>
        <Option value="5">Resolved</Option>
        <Option value="6">Cancelled</Option>
    </Select>
);

export default Selector;