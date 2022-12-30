import React, { useState } from 'react'

export default function TextForm() {


    // function convertUpperCase(tex) {
    //     console.log(tex);
    // }   
    const convertUpperCase = () => {
        let newAddressText = address.toUpperCase();
        setAddress(newAddressText);
    }

    const handleOnChange = (ev) => {
        setAddress(ev.target.value);
    }

    const convertLowerCase = () => {
        let lowerCase = address.toLowerCase();
        setAddress(lowerCase);
    }
    const clearText = () => {
        setAddress("");
    }



    const changeMode = () => {
        if (pchagne.color == "black") {
            setPchagne({
                color: "white",
                backgroundColor: "black",
            });
        } else {
            setPchagne({
                color: "black",
                backgroundColor: "white",
            });
        }

    }


    const [address, setAddress] = useState('');  // this is the hooks syntax 
    const [pchagne, setPchagne] = useState({
        color: "black",
        backgroundColor: "white",
    });

    // setAddress("hii hardik updated address"); // here we can se the address 
    return (
        <div className='container' style={pchagne}>
            <p style={pchagne}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum commodi mollitia ab vero perspiciatis fuga a aut quasi. Aliquid quibusdam non, quae recusandae assumenda doloribus omnis sint soluta a ea.</p>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Text Area</label>

            <textarea value={address} className="form-control" onChange={handleOnChange} id="exampleFormControlTextarea1" rows="5">

            </textarea>


            <button className='btn btn-primary mt-2' onClick={convertUpperCase} > Upper Case  </button>
            <button className='btn btn-info mt-2 mx-2' onClick={convertLowerCase} > Lower Case </button>
            <button className='btn btn-info mt-2 mx-2' onClick={clearText} > Clear </button>
            <button className='btn btn-info mt-2 mx-2' onClick={changeMode} > Dark Mode  </button>
        </div>
    )
}
