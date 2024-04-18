import React from 'react'
import { useTheme } from '../theme/ThemeContext';

export default function Footer() {
  const theme = useTheme();
  let currentYear = new Date().getFullYear()
  return (
    <div className='footer-main' style={{display:'flex',justifyContent:'center',alignItems:'center',flexGrow:'1',padding:'20px'}}>
      <div className='footer-inner' style={{color:'#DCDCDC'}}>
      <h4 style={{fontWeight:'500',color: theme.colors.text.secondary,}}>Groovy-Box © {currentYear}</h4>
      </div>
    </div>
  )
}
