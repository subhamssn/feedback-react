import { useState } from 'react';
import FeedbackItem from './components/FeedbackItem';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';

function App(){ 

    const [Feedback, setFeedback] = useState(FeedbackData);



    return (
      <>
        <Header />
        
        <div className='container'>
        
        <FeedbackList feedback={Feedback}/>
        
        </div>
      </>
    );
}

export default App;