const BoxColor = ({ r, g, b }) => {
  function rgbToHex() {
    function componentToHex(component) {
        const hex = component.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }

    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  return (
    <div className="BoxColor box-border" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})`, textAlign: 'center' }}>
      <p>rgb({r}, {g}, {b})</p>
      <p>{rgbToHex()}</p>
    </div>
  )
}

export default BoxColor