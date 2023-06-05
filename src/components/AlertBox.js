import '../assets/css/AlertBox.css'

const AlertBox = ({alertOptions}) => {
    return (
        <div className={alertOptions.isActive ? "AlertBox active":"AlertBox"}>
            <p className={alertOptions.type}> {alertOptions.message} </p>
        </div>
    )
}

export default AlertBox;