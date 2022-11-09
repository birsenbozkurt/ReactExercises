import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, age, friends, address }) {
	return (
		<>
			<h1>
				{name} {surname} ({age})
			</h1>
			{address.title} {address.zip}
			<br />
			<br />
			{friends &&
				friends.map((friend) => {
					const x = friend.id + 2;
					console.log(x);

					return (
						<div key={friend.id}>
							{friend.name}
							<br></br>
						</div>
					);
				})}
		</>
	);
}

User.propTypes = {
	name: PropTypes.string.isRequired,
	surname: PropTypes.string,
	isLoggedIn: PropTypes.bool,
	age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	friends: PropTypes.array,
	address: PropTypes.shape({
		title: PropTypes.string,
		zip: PropTypes.number,
	}),
};
User.defaultProps = {
	name: "İsimsiz",
};
export default User;
