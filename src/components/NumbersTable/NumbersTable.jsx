import './NumbersTable.css';
const NumbersTable = ({ limit }) => {

  return (
    <div className="NumbersTable">
      {new Array(limit).fill().map((_, index) => (
        <div style={{ backgroundColor: (index + 1) % 2 === 0 ? 'red' : 'white' }} key={index}>{index + 1}</div>
      ))}
    </div>
  )
}

export default NumbersTable