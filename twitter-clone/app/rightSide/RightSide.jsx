import Link from "next/link"


const RightSide = () => {
  return (
    <>
   <div className="float-right mr-[50px] mt-[-480]">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NXf1RfbZp1i89Q23OCXyZYYZr-hF3aWp_vO74CGsv3lNX3Df7sYnUGg3kleXCaxOmHc&usqp=CAU"
   width={25}
   height={25}
   className="mt[px] absolute z-50"
   />

    <input type="text" placeholder="Search Twitter" className="bg-gray-300 px-[40px] py-2 rounded-4xl relative" />

<br /> <br />
    <div className="bg-gray-200 w-[400px] h-[400px] rounded-xl">

<div className="ml-5 mt-3 text-xl font-bold absolute">
    <h3>Trends for you</h3>
    <img 
    src="https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png"
    width={20}
    className="ml-[330px] mt-[-15px]"
    
    />
</div>

<div className="ml-5 mt-3  mt-[65px] text-[-50px] absolute">
   <p>Trends in World  </p>
   
   <p> #newgraduated</p>
    
   <p> 15222 Tweets</p>
   
    <img 
    src="https://static.thenounproject.com/png/1380510-200.png"
    width={20}
    className="ml-[330px] mt-[-65px]"
    
    />
</div>
<br /><br /><br /><br />

<div className="ml-5 mt-3  mt-[65px] text-[-50px] absolute">
   <p>Trends in World 
   
   <p> #newgraduated</p>
    
   <p> 15222 Tweets</p>
   </p>
    <img 
    src="https://static.thenounproject.com/png/1380510-200.png"
    width={20}
    className="ml-[330px] mt-[-65px]"
    
    />
</div>

<br /><br /><br /><br />

<div className="ml-5 mt-3  mt-[65px] text-[-50px] absolute">
   <p>Trends in World 
   
   <p> #newgraduated</p>
    
   <p> 15222 Tweets</p>
   </p>
    <img 
    src="https://static.thenounproject.com/png/1380510-200.png"
    width={20}
    className="ml-[330px] mt-[-65px]"
    
    />
</div>
<br /><br /><br /><br /><br /><br /><br />
<Link href="#"><p className="ml-5 text-sky-600">Show More....</p></Link>

    </div>

   </div>
    </>
  )
}

export default RightSide
