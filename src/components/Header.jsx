import propTypes from 'prop-types';

function Header(props) {

    const headerStyles = {
        backgroundColor: props.bgColor,
        color: props.textColor
    }
  return (

    <header style={headerStyles}>
       <div className="container">
          <h2>{props.text}</h2>
       </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
    
}

Header.propTypes = {
    text: propTypes.string,
    bgColor: propTypes.string,
    textColor: propTypes.string
    
}

export default Header;
