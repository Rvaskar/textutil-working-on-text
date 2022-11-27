import React from 'react'

export default function Alert(props) {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAT(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div>
        props.Alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{capitalize(props.Alert.type)}</strong> :{props.Alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}
