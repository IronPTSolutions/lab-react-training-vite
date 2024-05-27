const Random = ({ min, max }) => {
  const randomValue = Math.floor((Math.random() * (max - min + 1)) + min);
  return (
    <div className="Random box-border">
      Random value between {min} and {max} ={'>'} {randomValue}
    </div>
  )
}

export default Random;