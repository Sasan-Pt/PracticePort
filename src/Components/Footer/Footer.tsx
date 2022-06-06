import React, {Fragment} from 'react';


const Footer = () => {
    return (
        <Fragment>
        <div className="flex justify-between cRes:justify-start cRes:block mt-14">
            <div className="flex cRes:flex-col">
            <div>
                <ul>
                    <li>Working With Us</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="ml-20 cRes:ml-0 cRes:mt-8">
                <ul>
                    <li>Awwwards</li>
                    <li>Instagram</li>
                    <li>LinkedIn </li>
                    <li>Twitter </li>
                </ul>
            </div>
            </div>



            <div className="flex cRes:flex-col">
                <div  className="flex mr-20 cRes:flex-col cRes:mt-8">
                    <ul>
                        <li>Birmingham</li>
                        <li>7c Frederick St.</li>
                        <li>Victoria Works</li>
                        <li>Birmingham</li>
                        <li>B1 3HE</li>
                    </ul>
                </div>
                <div className="cRes:mt-8">
                    <ul>
                        <li>London</li>
                        <li>The Stanley </li>
                        <li>Building </li>
                        <li>7 Pancras Square </li>
                        <li>London </li>
                        <li>N1C 4AG</li>
                    </ul>
                </div>
            </div>
        </div>
            <div className="flex justify-between mt-14 mb-16 cRes:flex-col">
                <div className="flex">
                    <div>Privacy Policy</div>
                    <div className="ml-8">SiteMap</div>
                </div>
                <div className="flex mt-4">
                    <div>© adaptable 2022</div>
                    <div className="ml-8">|</div>
                    <div className="ml-8">All Rights Reserved</div>
                </div>
            </div>
        </Fragment>
    );
};



export default Footer;