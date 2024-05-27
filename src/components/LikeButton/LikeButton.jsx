import { useState } from 'react';

const colors = [
  "purple",
  "blue",
  "green",
  "yellow",
  "orange",
  "red"
]

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * (colors.length - 1))

  return colors[randomIndex]
}

const LikeButton = () => {
  const [likeCount, setLikeCount] = useState(0)
  const [bgColor, setBgColor] = useState(getRandomColor())
  
  const handleClick = () => {
    setLikeCount(likeCount + 1)
    setBgColor(getRandomColor())
  }


  return (
    <button 
      // style={{ backgroundColor: colors[likeCount % colors.length] }}
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {likeCount} Likes
    </button>
  )
}

export default LikeButton;