import React from 'react'

export default function Footer() {

  let currentYear = new Date().getFullYear()
  return (
    <div className='footer-main' style={{display:'flex',justifyContent:'center',alignItems:'center',flexGrow:'1',padding:'20px'}}>
      <div className='footer-inner' style={{color:'#DCDCDC'}}>
      <h4 className='text-appTextSecondaryColor' style={{fontWeight:'500'}}>Groovy-Box © {currentYear}</h4>
      </div>
    </div>
  )
}
