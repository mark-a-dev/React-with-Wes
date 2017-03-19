import React from 'react'

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        {/* Commetn Test */}
        <h2>Please select a store.</h2>
        <input type="text" className="selector-input" placeholder="Store Name Here" required />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker
