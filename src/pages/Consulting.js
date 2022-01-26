import { useState } from 'react';

export default function Consulting() {

    const [data, setData] = useState(" ")
    function asoda(){
        setData("Arati")
    }

    return (
        <>
            <div className="consulting">
                <div className="con1">
                    <h1>{data}</h1>
                    <button onClick={asoda}>Click Me</button>
                </div>
            </div>
        </>
    )
}