import React, {useEffect, useState} from 'react';
import MasterLayout from "../components/shared/MasterLayout.jsx";
import axios from "axios";

const Homepage = () => {
    let [data,setdata]=useState( null)

    useEffect(() => {
        (async ()=>{
            let res=await axios.get('/api/CreateInvoice')
            setdata(res.data)
        })()
    }, []);
    return (
        <MasterLayout>
            <h1>Home Page</h1>
            {data != null &&
                (<ul>
                    <li>Total:{data['total']}</li>
                    <li>Vat:{data['vat']}</li>
                    <li>Payable:{data['payable']}</li>
                </ul>)
            }

        </MasterLayout>
    );
};

export default Homepage;