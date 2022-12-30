import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/share/Card'
import Header from '../components/Header'
function AboutPage() {
  return (
    <>
    <Header />
	    <div className="container">
            <Card>
                <div className='about'>
                    <h1>About feedback app</h1>
                    <p>This is a project made after a REACT tutorial</p>
                </div>
                <p>
                    <Link to='/'>Back to Feedback</Link>
                </p>
            </Card>
    </div>
    </>
    
   
  )
}

export default AboutPage
