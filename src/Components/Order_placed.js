import React, { useState,useEffect,axios  } from 'react'
import Order_display from './Order_display'
import Vector from '../assets/sort.png';
import Vector1 from '../assets/Filter.png';
import arrow1 from '../assets/arrw1.png';
import arrow2 from '../assets/arrw2.png';
import Ordersdata from './Ordersdata'
import Guide from './Guide';
function Order_placed() {

    const [open, setopen] = useState(false)
    const [sortValue, setsortValue] = useState("")
    const [Sort, setSorts] = useState([]);
   
    useEffect(() => {
        const fetchPosts = async () => {
            setSorts(Ordersdata);
        }; fetchPosts();
    }, []);

    const handleclick = () => {
        setopen(!open)
        // console.log('opend')

    }
    const sortOptions = ["Guide", "Traveler", "Date", "Profit"];
    const sortby= async(e) => {
        const sort=e.target.value;
        
    }


    return (
        <div className=' bg-white rounded-[8px] border-[1px] mt-[10px]'>
            <div className='flex z-10'>
                <p className='w-[200px] z-10 font-Poppins m-10 text-2xl font-semibold  '>All Orders</p>
                <div className='flex w-[100%] justify-end mt-10 mr-14 font-Poppins  font-medium space-x-5'>


                    <select onChange={sortby} value={sortValue} className={!open ? 'hidden' : "h-[30px] flex bg-white z-10 border text-sm"}>
                     <option>Sort By</option>
                        {
                            sortOptions.map((item, index) => (
                                <option  value={item} key={index} className="flex items-center h-[30px] hover:bg-gray-700 py- px-4">
                                    {item}</option>
                            ))
                        }

                    </select>

                    <div typeof='button' onClick={handleclick}>
                        <img src={Vector} alt='' className=' w-[17px] h-[px] mt-[5px] ' />
                    </div>
                    <label>Sort</label>

                    <img src={Vector1} alt='' className=' w-[14px] h-[14px] mt-[5px] ' />
                    <label>Filter</label>
                </div>



            </div>
            <div className='text-[#4B506D] font-Poppins font-medium'>
                <label className='ml-14 absolute '>Guide</label>
                <div className='ml-[490px]'>
                    <div className='flex  '>
                        <label className='w-[200px]'>Traveller Name</label>
                        <label className='w-[240px]'>Date</label>
                        <label className='w-[170px]'>Profit</label>
                    </div>
                </div>
                <hr />
            </div>

            {
                Ordersdata.map((val, id) => {

                    const a = val.img
                    // eslint-disable-next-line react/jsx-pascal-case
                    return <Order_display
                        key={id}
                        guide={val.Guide}
                        Traveller={val.Traveller}
                        Profit={val.Profit}
                        Date={val.Date}
                        img={require('./profile/img' + a + '.png')}
                        ondate={val.ondate}
                        Time={val.Time}

                    />
                })
            }
            <div className='flex mb-7'>
                <div className='flex justify-end w-[90%] text-[#9FA2B4] space-x-40'>
                    <label>Rows per page 8</label>
                    <label >1-8 of 1240</label>

                </div>
                <img src={arrow1} alt='' className='  ' />
                <img src={arrow2} alt='' className='  ' />
            </div>


        </div>
    )
}

export default Order_placed