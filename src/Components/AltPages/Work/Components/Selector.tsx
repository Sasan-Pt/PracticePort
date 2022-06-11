import React from 'react';
import 'antd/dist/antd.less';
import { Select } from 'antd';



const { Option } = Select;



const Selector = () => (
    <div >
    <Select
        showSearch
        style={{
            width: "100%",
        }}
        placeholder="Search to Select"
        optionFilterProp="children"
        filterOption={(input:any, option:any) => option.children.includes(input)}
        filterSort={(optionA:any, optionB:any) =>
            optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
        }
    >
        {["All","Charity", "Corporate","Digital Products","E-Commerace","leisure","Property"].map(x=>{
            return <option className=" p-2 rounded-xl ml-2">{x}</option>
        })}

    </Select>
    </div>
);

export default Selector;