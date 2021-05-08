import PropTypes from 'prop-types';

const Panel=({children, hasPadding })=> {
  const classNames = ["panel"]

  if(hasPadding) classNames.push('panel-has-padding');
  return (
    <div className={classNames.join(" ")}>
      {children}
    </div>
  )
}
Panel.propTypes = {
  /**
   * Indicate if the panel box has padding
   */
  hasPadding: PropTypes.bool
}
Panel.defaultProps = {
  hasPadding:false,
}
export default Panel;