import React from 'react'

function Options({ name, updateItemCount }) {

  const handleChange = (e) => {
    updateItemCount(
      name, 
      e.target.checked ? 1 : 0
    );
  }

  return (
    <form>
      <input 
        type="checkbox"
        id={`${name} option`}
        onChange={handleChange}
      />{" "}
      <label htmlFor={`${name} option`}>{name}</label>
    </form>
  )
}

export default Options
