import {Link} from 'react-router-dom'
import './styles.css'

const LandingPage = () => {
  return (
    <div className='landing-background'>
        <Link to='/home' className='landing-button'>Let's Eat</Link>
    </div>
  )
}

export default LandingPage;