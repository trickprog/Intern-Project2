import React from 'react';
import Vector from '../assets/sort.png';
const GuideCard = (props) => {
    let color = 'red'
    if (props.Status=== 'Active') {
        color = 'bg-[#CEFFC1]'
    }
    if (props.Status=== 'InActive') {
        color = 'bg-[#FFC1C1]'
    }
  
    return (
        <div>
            <div className='text-black font-Poppins font-medium w-[100%] h-[100px]'>
                <img class="w-[44px] h-[44px] absolute -mt-2 ml-10 rounded-full" src={props.img} alt="Neil image" />
                <label className='ml-24 absolute '>{props.Name}</label>
                <div className='ml-[210px]'>
                    <div className='flex justify-around  '>

                        {/* <div className='absolute z-10' style={{ backgroundImage: `url(${props.img})` }}>
  </div>{console.log(props.img)} */}

                        <label className=''>{props.Location}</label>
                        <label className=' '>{props.Joined}</label>
                        <label className=''>{props.Email}</label>
                        <div className=''>
                            <button type="button"
                                className={`text-white bg-{{color}}  font-medium rounded-[100px] text-sm px-4 py-1 mr-2 mb-2 ${color}`}
                            >{props.Status}</button>
                        </div>
                  

                    </div>

                </div>


            </div>
        </div>
    );
}

export default GuideCard;
