import '../assets/css/spanDivider.css'

const SpanDivider = ({ textArray }) => {

    return (
        <>
            {Array.from(textArray).map((text) => <span className='spanAnimated'>{text}</span>)}
        </>
    )
}

export default SpanDivider;