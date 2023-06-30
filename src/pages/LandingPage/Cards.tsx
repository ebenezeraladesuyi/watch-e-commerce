// import React from 'react'

import Card from "../../components/blocks/Card";
import Button from "../../components/blocks/button";
import watch1 from '../../assets/watches/watch1.png'
import watch2 from '../../assets/watches/watch3-F.png'
import watch3 from '../../assets/watches/iWatch8.png'
import watch4 from '../../assets/watches/watch13-F.png'
import watch5 from '../../assets/watches/watch4.png'
import watch6 from '../../assets/watches/watch7.png'
import watch7 from '../../assets/watches/iWatch9.png'
import watch8 from '../../assets/watches/watch15-F.png'
import watch9 from '../../assets/watches/watch6-F.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Cards = () => {

    
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
      };


  return (
    <div className="w-full h-[70vh] overflow-hidden flex justify-center items-center font-roboto">

        <div className="w-[90%] h-full">

            <div className="w-full flex justify-around items-center mt-[30px] mb-[30px]">
                <Button 
                    buttonTitle="ALL"
                    back="bg-black"
                />
                <Button 
                    buttonTitle="UNISEX"
                />
                <Button 
                    buttonTitle="MEN"
                />
                <Button 
                    buttonTitle="WOMEN"
                />
                <Button 
                    buttonTitle="CARTIER"
                />
                <Button 
                    buttonTitle="ROLEX"
                />
                <Button 
                    buttonTitle="CALVIN KLIEN"
                />
                <Button 
                    buttonTitle="OTEO"
                />

            </div>

            <div className="w-full flex justify-between items-center">

                <Slider {...settings} className='w-full flex items-center justify-center'>

                    
                <Card
                    rating='7.0' 
                    watchImg={watch1}
                    watchName="LIMESTONE"
                    price="$850.00"
                />
                <Card
                    rating='8.0' 
                    watchImg={watch2}
                    watchName="ROLEX"
                    price="$600.00"
                />
                <Card
                    rating='7.2' 
                    watchImg={watch3}
                    watchName="CARTIER SMART"
                    price="$900.00"
                />
                <Card
                    rating='7.7' 
                    watchImg={watch4}
                    watchName="JORD"
                    price="$550.00"
                />
                <Card
                    rating='8.5' 
                    watchImg={watch5}
                    watchName="ROLEX"
                    price="$750.00"
                />
                <Card
                    rating='6.9' 
                    watchImg={watch6}
                    watchName="CALVIN KLIEN"
                    price="$680.00"
                />
                <Card
                    rating='7.6' 
                    watchImg={watch7}
                    watchName="APPLE SMART "
                    price="$800.00"
                />
                <Card
                    rating='8.6' 
                    watchImg={watch8}
                    watchName="BLANCPAIN"
                    price="$600.00"
                />
                <Card
                    rating='9.1' 
                    watchImg={watch9}
                    watchName="ROLEX"
                    price="$700.00"
                />

                </Slider>

            </div>

        </div>
        
    </div>
  )
}

export default Cards