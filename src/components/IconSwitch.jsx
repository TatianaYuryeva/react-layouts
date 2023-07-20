export const IconSwitch = ({ icon, onSwitch }) => {

  return (
    <div className="icon">
      <span class="material-icons" onClick={onSwitch}>
        {icon}
      </span>
    </div>
  )
}

export default IconSwitch