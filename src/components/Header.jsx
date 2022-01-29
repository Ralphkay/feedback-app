import PropTypes from 'prop-types'
export default function Header({text, bgColor, textColor}){

    const headerStyles = {
        backgroundColor:bgColor, 
        color:textColor,
        textShadow:'1px 1px 2px rgba(0, 0, 0)',
    }
    return (
        <>
            <header style={headerStyles}>
                <div className="container">
                    <h2>{text}</h2>
                </div>
            </header>
        </>
    )
}

Header.defaultProps = {
    text:'Feedback UI',
    bgColor: 'rgba(0, 0,0, 0.4)',
    textColor:'#ff6a95'
}

Header.propTypes = {
    text:PropTypes.string.isRequired,
    bgColor:PropTypes.string,
    textColor:PropTypes.string
}