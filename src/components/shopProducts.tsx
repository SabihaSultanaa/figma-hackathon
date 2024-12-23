import React from 'react'
import Image from 'next/image'
function ShopProducts() {
  return (
    <>  
    <div className='w-full px-[100px]'>
        {/* starting cards  */}
        {/* first layer  */}
    <div className=' flex gap-[30px] w-full mt-[20px]'>
   
    {/* pick1  */}
    <div>
    <div className='w-[287px] h-[250px] mt-[20px] relative'><Image src={'/pick1.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[50px]'>Trenton modular sofa_3</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 25,000.00</div>
    </div>
    {/* pick2  */}
    <div className='xxs:hidden sm:inline-block'>
    <div className='w-[287px] h-[287px] relative'><Image src={'/pick2.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[40px]'>Granite dining table with dining chair</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 25,000.00</div>
    </div>
    {/* pick3  */}
    <div className='xxs:hidden xl:inline-block'>
    <div className='w-[287px] h-[287px] relative'><Image src={'/pick3.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[40px]'>Outdoor bar table and stool</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 25,000.00</div>
    </div>
    {/* pick4  */}
    <div className='xxs:hidden xl:inline-block'>
    <div className='w-[287px] h-[287px] relative'><Image src={'/pick4.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[40px]'>Plain console with teak mirror</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 25,000.00</div>
    </div>






    </div>
    {/* first layer end  */}
    {/* second layer */}
    <div className=' flex gap-[50px] w-full  mt-[100px]'>
   
    {/* pick1  */}
    <div>
    <div className='w-[250px] h-[180px] relative'><Image src={'/p5.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[40px]'>Grain coffee table</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 15,000.00</div>
    </div>
    {/* pick2  */}
    <div className='xxs:hidden sm:inline-block'>
    <div className='w-[230px] h-[170px]   relative'><Image src={'/p6.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[50px]'>Kent coffee table</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 225,000.00</div>
    </div>
    {/* pick3  */}
    <div className='xxs:hidden xl:inline-block'>
    <div className='w-[287px] h-[170px] relative '><Image src={'/p7.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[50px]'>Round coffee table_color 2</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 251,000.00</div>
    </div>
    {/* pick4  */}
    <div className='xxs:hidden xl:inline-block'>
    <div className='w-[270px] h-[100px] mt-[40px] relative'><Image src={'/p8.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[80px]'>Reclaimed teak coffee table</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 25,200.00</div>
    </div>






    </div>

    {/* second layer end  */}
    {/* {third layer } */}
    <div className=' flex gap-[10px] w-full mt-[50px] '>
   
    {/* pick1  */}
    <div>
    <div className='w-[287px] h-[130px] mt-[80px] relative'><Image src={'/p9.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[110px]'>Plain console_</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 258,200.00</div>
    </div>
    {/* pick2  */}
    <div className='xxs:hidden sm:inline-block'>
    <div className='w-[287px] h-[250px] mt-[40px] relative'><Image src={'/p10.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[35px]'>Reclaimed teak Sideboard</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 20,000.00</div>
    </div>
    {/* pick3  */}
    <div className='xxs:hidden xl:inline-block'>
    <div className='w-[287px] h-[287px] mt-[10px] relative'><Image src={'/p11.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[20px]'>SJP_0825</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 200,000.00</div>
    </div>
    {/* pick4  */}
    <div className='xxs:hidden xl:inline-block'>
    <div className='w-[287px] h-[100px] mt-[90px] relative ml-[0px]'><Image src={'/p12.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[120px]'>Bella chair and table</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 100,000.00</div>
    </div>






    </div>
    {/* third layer end  */}
{/* {forth layer } */}
<div className=' flex gap-[30px] w-full mt-[50px]  justify-between'>
   
    {/* pick1  */}
    <div>
    <div className='w-[240px] h-[200px] mt-[60px] relative '><Image src={'/sidetable.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[20px]'>Granite square side table</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 258,800.00</div>
    </div>
    {/* pick2  */}
    <div className='xxs:hidden md:inline-block  '>
    <div className='w-[257px] h-[200px] mt-[40px] relative'><Image src={'/asgaard.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[40px]'>Asgaard sofa</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 250,000.00</div>
    </div>
    {/* pick3  */}
    <div className='xxs:hidden xl:inline-block'>
    <div className='w-[270px] h-[100px] relative mt-[70px]'><Image src={'/lsofa.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[110px]'>Maya sofa three seater</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 115,000.00</div>
    </div>
    {/* pick4  */}
    <div className='xxs:hidden xl:inline-block'>
    <div className='w-[247px] h-[200px] relative '><Image src={'/bsofa.png'} alt='hero'  objectFit='cover' layout='fill' /></div>
<div className='text-[16px] mt-[80px]'>Outdoor sofa set</div>
<div className='text-[24px] font-semibold mt-[6px]'>Rs. 244,000.00</div>
    </div>






    </div>
{/* forth layer end  */}
<div className=' flex justify-center items-center gap-[30px] mt-[100px] '>
    <button className='w-[58px] h-[60px] rounded-[10px] bg-[#FBEBB5] text-[20px]'>1</button>
<button className='w-[60px] h-[58px]  rounded-[10px] bg-[#FFF9E5] text-[20px]'>2</button>
<button className='w-[60px] h-[58px]  rounded-[10px] bg-[#FFF9E5] text-[20px]'>3</button>
<button className='w-[98px] h-[58px]  rounded-[10px] bg-[#FFF9E5] text-[20px]'>Next</button></div>


 {/* Features Section */}
 <section className="bg-[#FAF4F4] py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-medium mb-4">Free Delivery</h3>
              <p className="text-gray-500 text-lg">For all oders over $50, consectetur adipim scing elit.</p>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-4">90 Days Return</h3>
              <p className="text-gray-500 text-lg">If goods have problems, consectetur adipim scing elit.</p>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-4">Secure Payment</h3>
              <p className="text-gray-500 text-lg">100% secure payment, consectetur adipim scing elit.</p>
            </div>
          </div>
        </div>
      </section>


    {/* end div  */}
    </div>
    </>
  )
}

export default ShopProducts