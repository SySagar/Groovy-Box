import { Link } from 'gatsby'
import React from 'react'
import * as styles from './layout.module.css';

export default function header() {
  return (
    <div className={styles.headerMain} style={{display:'flex',justifyContent:'center',alignItems:'center',flexGrow:'1',padding:'20px',paddingInline:'30px',background:'#2E393F'}}>
      <div className='header-inner' style={{display:'flex',flexDirection:'row',width:'100%'}}>
        <div className='logo-name' style={{display:'flex',flexDirection:'row',gap:'10px',justifyContent:'center',alignItems:'center'}}>
        <img src="logo.png" style={{width:'30px',height:'30px'}} alt="" />
        <h3 style={{color:'white'}}>Enigma-UI</h3>
        </div>

        <div className='grower' style={{display:'flex',flexGrow:'1'}}></div>

        <div className='quick-links' style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'20px'}}>
            <Link className={styles.link} to='/'>Components</Link>
            <Link className={styles.link} to='/'>Docs</Link>
            <Link className={styles.link} to='/'>About</Link>
        </div>
      </div>
    </div>
  )
}
