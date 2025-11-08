import './Contact.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="contactInfo">
        <div className='contactItem'>
            <FaPhone />
            <span>562-991-4994</span>
        </div>
        <div className='contactItem'>
            <FaEnvelope />
            <span>aldriechvillamor0922@gmail.com</span>
        </div>
        <div className='contactItem'>
            <FaMapMarkerAlt />
            <span>Santa Ana, California</span>
        </div>
    </div>
    
  )
}

export default Contact


