import React from 'react'
import CardsListSurah from './CardsListSurah';

const Content = (props) => {
   return(
      <div className="container">
         <div className="title__namaSurah">
            <h5 className="text-center text-light">Daftar Surah al-Quran</h5>
         </div>
         <div className="ayat__surah">
         </div>
         <CardsListSurah 
            Surah = {props.Surah}
         />
      </div>
   )
}  


export default Content