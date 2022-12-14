import Card from './share/Card';
import Button from './share/Button';
import { useState } from 'react';
import RatingSelect from './RatingSelect';

function FeedbackForm({ handleAddFeedback }) {
	const [text, setText] = useState('');
	const [rating, setRating] = useState('');

	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const handleTextChange = (e) => {
		if (text === '') {
			setButtonDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setMessage('Text must be at least 10 characters');
			setButtonDisabled(true);
		} else {
			setButtonDisabled(false);
			setMessage('');
		}

		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (text.trim().length > 10) {
			const newFeedback = {
				text: text,
				rating: rating,
			};

			handleAddFeedback(newFeedback);
			setText('');
		}
	};
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={() => setRating(rating)} />
				<div className="input-group">
					<input
						type="text"
						placeholder="write a review"
						onChange={handleTextChange}
						value={text}
					></input>
					<Button type="submit" isDisabled={buttonDisabled}>
						Send
					</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
}

export default FeedbackForm;
