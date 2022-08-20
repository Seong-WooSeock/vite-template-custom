import React, {useState} from "react";

export default function TestSetting() {
    const [blahblah, setBlahblah] = useState<any>('')
    return (
        <>
            <h2>hello world</h2>
            <input onChange={(e)=>setBlahblah(e.currentTarget.value)} />
        </>
    )
}