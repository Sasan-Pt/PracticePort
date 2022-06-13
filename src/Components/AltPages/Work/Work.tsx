import React,{Fragment} from 'react';
import {useParams} from "react-router-dom"
import Menu from "./Components/Menu";
import LayPictures from "./Components/LayPictures";
import Pics from "./Components/Pics";


 const Work = () => {

    let params= useParams()
    if (params.work==="work"){
        document.body.style.background="white"
    }
    const pics1 =
        {
            left:"https://assets.weareadaptable.com/app/uploads/2021/01/15125342/3Z9A1535-scaled-1.jpg",
            right:"https://assets.weareadaptable.com/app/uploads/2022/04/14132332/phmg-thumb.jpg",

        }

     const pics2=
         {
             left:"https://assets.weareadaptable.com/app/uploads/2020/08/28142110/bah-thumb.jpg",
             right:"https://assets.weareadaptable.com/app/uploads/2020/10/15142954/boop-cover.gif"
         }


    return (
        <Fragment>
        <div className="mt-16">
            <Menu/>
            <LayPictures pic={pics1}/>
            <LayPictures pic={pics2}/>
            <Pics/>
        </div>
        </Fragment>
    );
};
export default Work


