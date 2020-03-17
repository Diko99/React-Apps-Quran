import React from 'react'

const ListSurah = (props) => {
console.log(props, 'component listsurah')
   return(
      <div className="container bg-info">
         <div className="row justify-content-center">
            {props.ListSurah.map((item, index) => {
               // console.log(item, 'deletetulual')
               return (
                  <div className="col-md-3" key={index} >
                     <div className="container-fluid bg-light text-center"  style={{
                     height: '14rem',
                     borderRadius: '5px',
                     padding: '40px',
                     marginTop: '20px',
                     }}
                     >
                        <h4 className="text-dark">{item.asma}</h4>
                        <h5>
                           {item.nama}
                        </h5> 
                        <p>
                           ({item.arti})
                        </p>
                        <button className = "btn btn-default btn-success mt-2"
                           onClick  = {()=>props.detailsSurahQuran(item.nomor)}
                           value  =  {item.nama}
                        >
                           Baca Surah
                        </button>
                     </div>
                  </div>
                  )
               })
            }
         </div>
      </div>
   )
}

export default ListSurah