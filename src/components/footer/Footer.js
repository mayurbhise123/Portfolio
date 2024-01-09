import './footer.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer=()=>{
    return(
        <div className='footer'>
            <div className='left-section'>
                <span>Contact</span>
                <span>7058286703</span>
            </div>
            <div className='middle-section'>
                ©️ 2023 Mayur Sharad Bhise | Made In India With ❤️ 
                <div className='icons'>
                    <span><a href="https://www.linkedin.com/in/mayur-bhise-932636245/"><LinkedInIcon /></a></span>
                    <span><a href="https://www.instagram.com/mayur_bhise_19/"><InstagramIcon/></a></span>
                </div>
            </div>
            <div className='right-section'>
                <span>Email</span>
                <span>mayursharad2001@gmail.com</span>
            </div>
        </div>
    );
}
export default Footer;