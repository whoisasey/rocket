import React from 'react'

export const Inputs = ({ name, id, label, value, type,placeholder, onChange }) => {
   return (
  <div  className="field">
		<label htmlFor={label}>{label}</label>
   <input
  id={id}
  name={name}
  type={type}
  value={value}
  onChange={onChange}
  placeholder={placeholder}
  />
  </div>
   )
}

