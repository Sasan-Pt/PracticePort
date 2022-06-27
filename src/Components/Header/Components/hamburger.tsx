import React, {useContext} from 'react';
import {MenuOutlined} from "@ant-design/icons"
import Context from "../../Context/Context";
import {useParams} from "react-router-dom"

const Hamburger = () => {
    const ctx=useContext(Context)
    let params= useParams()
    let color=null

    if (params.work==="work"){
        color="text-black"
    }
    return (
        <div onClick={ctx?.clicker} className="flex cResH:hidden text-white justify-between">
        <div className={`flex mt-14 justify-between ${color}`}>
            adaptable
        </div>
            <div className={`mt-14 ${color}`}>
            <MenuOutlined  style={{fontSize:"30px"}}/>
            </div>
        </div>
    );
};


export default Hamburger;