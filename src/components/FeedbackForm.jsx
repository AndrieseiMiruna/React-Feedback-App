import Card from './share/Card';
import { useState } from 'react';

function FeedbackForm() {
	const [text, SetText] = useState('');

	const handleTextChange = (e) => {
		SetText(e.target.value);
	};
	return (
		<Card>
			<form>
				<h2>How would you rate your service with us?</h2>

				<div className="input-group">
					<input
						type="text"
						placeholder="write a review"
						onChange={handleTextChange}
						value={text}
					></input>
					<button type="submit">Send</button>
				</div>
			</form>
		</Card>
	);
}

export default FeedbackForm;
