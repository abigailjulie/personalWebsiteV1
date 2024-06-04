import github from '../assets/images/github.svg';
import linkedin from '../assets/images/linkedin.svg';
import './ContactIcons.css';

export default function ContactIcons () {
    return (
        <span className='contactIcons'>
            <div className='socialIcons'>
                <a href='#'><img src={github} alt='github' /></a>
                <a href='#'><img src={linkedin} alt='linkedin' /></a>
            </div>
        </span>
    )
}