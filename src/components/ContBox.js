const ContBox = ({ type, text, link }) => {
  return (
    <div className={type}>
      <a href={link}>{text}</a>
    </div>
  )
}

export default ContBox
