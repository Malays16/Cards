import PropTypes from 'prop-types';

const Card = ({ children, title, description }) => {
  return (
    <div className="card">
      {children}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node
};