import React from 'react'
import Banner from '../image/banner.png';
import '../styles/Contact.css';
function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide'
        style={{backgroundImage: `url(${Banner})`}}>
        </div>
        <div className='rightSide'>
            <h1>Bizimle İletşime Geçin</h1>
            <form>
                <label>Ad Soyad:</label>
                <input 
                type='text' 
                name='name' 
                placeholder='Lütfen adınızı soyadınızı giriniz.'/>
                <label>Mail:</label>
                <input 
                type='email' 
                name='email' 
                placeholder='Lütfen email adresini giriniz.'/>
                <label>Mesajınız:</label>
                <textarea 
                rows= '6'
                name='message' 
                placeholder='Lütfen mesajınızı giriniz.'/>
            </form>
        </div>

    </div>
  )
}

export default Contact