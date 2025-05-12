import Link from 'next/link'


const LeftSide = () => {
  return (
    <>
   
       <img
      src="https://logos-world.net/wp-content/uploads/2020/04/Twitter-Logo.png"
      width={75}
      height={75}      alt="Picture of the author"
      className="ml-[100px] mt-[50px]"
    />
    
    <br /> <br />
    {/* left side main section with icons and options */}

    <div className="ml-[120px]">
       <div className='inline-block mb-2 ml-[-10px]  hover:bg-gray-400 px-4 w-[140] rounded-4xl'>
         <img src="https://static.thenounproject.com/png/3574480-200.png" width={42} height={42} className='inline-block'/>
       <Link href="/dashboard" className='ml-[5px] mb-[50px]'>Home</Link>
       </div>
       <br />
       <div className='inline-block mb-3'>
         <img src="https://static.thenounproject.com/png/5209-200.png" width={25} height={25} className='inline-block'/>
       <Link href="/dashboard" className='ml-[6px] mb-[50px]'>Explore</Link>
       </div>
       <br />
       <div className='inline-block mb-3'>
         <img src="https://cdn-icons-png.flaticon.com/512/3119/3119338.png" width={25} height={25} className='inline-block'/>
       <Link href="/dashboard" className='ml-[6px] mb-[50px]'>Notifications</Link>
       </div>
       <br />
        <div className='inline-block mb-3'>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMr71xaFwZUgwNGf4F3kZ5dixAqVpm4bLFQ&s" width={20} height={20} className='inline-block'/>
       <Link href="/dashboard" className='ml-[6px] mb-[50px]'>Messages</Link>
       </div>
       <br />
        <div className='inline-block mb-3'>
         <img src="https://i.pinimg.com/736x/53/53/4a/53534aa10681e044afadc9966183b24a.jpg" width={20} height={20} className='inline-block'/>
       <Link href="/dashboard" className='ml-[6px] mb-[50px]'>Bookmarks</Link>
       </div>
       <br /> 
        <div className='inline-block mb-3'>
         <img src="https://icons.veryicon.com/png/o/miscellaneous/eva-icon-fill/list-47.png" width={20} height={20} className='inline-block'/>
       <Link href="/dashboard" className='ml-[6px] mb-[50px]'>List</Link>
       </div>
       <br />
        <div className='inline-block'>
         <img src="https://static.thenounproject.com/png/683450-200.png" width={25} height={25} className='inline-block'/>
       <Link href="/dashboard" className='ml-[6px] mb-[50px]'>More</Link>
       </div>
       <br /> <br /> <br />
       <button type="button" className=" ml-[8px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-4xl text-sm px-15 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Tweet</button>

    </div>


    </>
  )
}

export default LeftSide
