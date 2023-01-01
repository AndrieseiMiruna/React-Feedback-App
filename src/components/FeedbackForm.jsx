import Card from './share/Card';
import Button from './share/Button';
import { useState, useContext, useEffect } from 'react';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
	const [text, setText] = useState('');
	const [rating, setRating] = useState(10);

	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const { addFeedback, feedbackEdit, updateFeedback } =
		useContext(FeedbackContext);

	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setButtonDisabled(false);
			setText(feedbackEdit.item.text);
			setRating(feedbackEdit.item.rating);
		}
	}, [feedbackEdit]);

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
			if (feedbackEdit.edit === true) {
				updateFeedback(feedbackEdit.item.id, newFeedback);
			} else {
				addFeedback(newFeedback);
			}
			setText('');
		}
	};
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<RatingSelect select={(rating) => setRating(rating)} />
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
