import { useState } from 'react';
import React from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/feedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';

export default function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};
	return (
		<Router>
			<Routes>
			<Route exact path='/' element={
				<>
				<Header />
				<div className="container">
					<FeedbackForm handleAddFeedback={addFeedback} />
					<FeedbackStats feedback={feedback} />
					<FeedbackList
						feedback={feedback}
						handleDelete={deleteFeedback}
					/>
				</div>
				</>
			}>
				
			</Route>

			<Route path='/about' element={<AboutPage />} />
			</Routes>

			<AboutIconLink />
		</Router>
	);
}
