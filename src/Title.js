import React from 'react'
import "./App.css"
const Title = ({toggle}) => {
  return (
    <div className="title">
        {!toggle && <h4>Scan for Menu</h4>}
       {toggle && <h4> Scannen Sie die Speisekarte</h4>}
        </div>
  )
}

export default Title
