import '../assets/css/AlertBox.css'

const AlertBox = (props) => {

    console.log(props)
    return (
        <div className={props.isActive ? "AlertBox active":"AlertBox"}>
            <p> {props.message} </p>
        </div>
    )
}

export default AlertBox;