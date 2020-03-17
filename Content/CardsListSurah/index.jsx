import React from 'react'

const CardsListSurah = (props) => {
   console.log(props, 'props on listcards surah');
   return(
      <div className="container-fluid">
         <div className="row mt-5 justify-content-center p-5">
            {props.Surah.map((item, index) => {
               return (
                  <div className="col-md-3" key={index} >
                     <div className="container-fluid bg-light text-center"  style={{
                     height: '10rem',
                     borderRadius: '5px',
                     padding: '40px',
                     marginTop: '20px',
                     }}
                     >
                        <h4 className="text-dark">{item.asma}</h4>
                        <h5>{item.nama}</h5>
                        <p>({item.arti})</p>
                     </div>
                  </div>
               )
            })}
         </div>
      </div>   
   )
}

export default CardsListSurah