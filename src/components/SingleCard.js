import React from 'react'

export default function SingleCard({card, handleChoice}) {
    const handleOnclick = () => {
        handleChoice(card)
    }
    
    return (
        <div className='card'>
            <div>
                <img className='cardfront' src={card.src} alt='card front' />
                <img 
                    className='cardback' 
                    src='/img/cover.png' 
                    alt='card back' 
                    onClick={handleOnclick}
                />
            </div>
        </div>
    )
}
