import React from 'react'
import './Card.css'

const data=[

    {title:'Sprint Forecast',
    rate:'4',
    descrition:'End Date 30/3/2025'
},
{title:'Sprint Forecast',
rate:'360',

},

{title:'Overall Progress',

rate:'95% ▲',

}

]

function Card() {
  return (
    <div className='card-container'>
    {data.map(item=>{
            return(
                <div className='card'>
        <span>{item.title}</span>
        {item.rate&&<span className='number'>{item.rate}</span>}
        <span>{item.descrition}</span>
      </div> 
            )
        })
    }
</div>
  )
}

export default Card
