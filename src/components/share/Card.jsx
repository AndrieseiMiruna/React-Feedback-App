import PropTypes from 'prop-types';

//style component

function Card({ children, reverse }) {
	//conditional class

	// return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
	return (
		<div
			className="card"
			style={{
				//conditional styling
				backgroundColor: reverse ? 'rgba(0, 0, 0, 0.4)' : '#fff',
				color: reverse ? '#ffffff' : '#000000',
			}}
		>
			{children}
		</div>
	);
}

Card.defaultProps = {
	reverse: false,
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
};

export default Card;
