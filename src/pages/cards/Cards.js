import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import dbs1 from '../../assets/accountstatement.jpeg'
import dbs2 from '../../assets/images/img-dbs2.jpg'


function Cards() {
    return (
        <div className='cards'>
            <h1>Live more, Bank less</h1>
            <div className='cards__containers'>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src={dbs1}
                            label='Account Statement'
                            path='/balance'
                            
                        />
                        <CardItem 
                            src ={dbs2}
                            label='Local Transfer'
                            path='/login'
                            
                        />   
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src='https://cdn.lynda.com/course/382578/382578-637491005365547459-16x9.jpg'
                            label='Investments'
                            path='/login'
                        />
                        <CardItem
                            src='https://thesiliconreview.net/story_image_upload/article/thesiliconreview-2020-dbs-banks-india-mission.jpg'
                            label='Apply for Cards'
                            path='/login'
                        />
                        <CardItem
                            src='https://www.startupguys.net/wp-content/uploads/2020/05/forex-trade.jpg'
                            label='Forex Rate'
                            path='/loginn'
                        />  
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
