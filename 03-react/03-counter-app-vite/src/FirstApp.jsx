import PropTypes from 'prop-types';
export const FirstApp = ( {title,subtitle, name} ) => {
    return (
    <>
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
        <p>{ name }</p>
    </>
);
} 

FirstApp.propTypes = {
    title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    title : 'No existe un título',
    subtitle: 'No existe un subtitle',
    name : 'No existe un nombre'
}