import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon/> 
        <TwitterIcon />
      <LinkedInIcon />
      <FacebookIcon />
      </div>
      <p>&copy; 2024 shawnbarrenpizza.com</p>
    </div>
  )
}

export default Footer
