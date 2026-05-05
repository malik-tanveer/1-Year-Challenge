import { useState } from 'react'

export default function Theme({children}:any) {

    const [dark, setDark] = useState(false);
    const toogletheme = () => setDark(!dark);
  return (
    <>
     <div style={{ background: dark ? "#222" : "#f5f5f5", color: dark ? "white" : "black", minHeight: "100vh" }}>
        {children({dark, toogletheme})}
        </div> 
    </>
  )
}
