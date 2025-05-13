import Link from "next/link"


const RightSide = () => {
    return (
        <>
            <div className=" fixed float-right ml-[1250px] mt-[-125] ">
                <img src="https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png"
                    width={20}
                    height={20}
                    className="mt-[10px] ml-2 absolute z-50"
                />

                <input type="text" placeholder="Search Twitter" className="bg-gray-300 px-[40px] py-2 rounded-4xl relative" />

                <br /> <br />
                <div className="bg-gray-200 w-[300px] h-[310px] rounded-xl">

                    <div className="ml-5 mt-3 text-xl font-bold absolute">
                        <h3>Trends for you</h3>
                        <img
                            src="https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png"
                            width={18}
                            className="ml-[240px] mt-[-18px]"

                        />
                    </div>

                    <div className="ml-5 mt-3  mt-[65px] text-sm/8 absolute">
                        <p>Trends in World 12  </p>

                        <p className="mt-[-15px] font-bold"> #newgraduated</p>

                        <p className="mt-[-15px]"> 15222 Tweets</p>

                        <img
                            src="https://static.thenounproject.com/png/1380510-200.png"
                            width={20}
                            className="ml-[240px] mt-[-75px]"

                        />
                    </div>
                    <br /><br /> <br />

                    <div className="ml-5 mt-3  mt-[65px] text-sm/8 absolute">
                        <p>Trends in World 12  </p>

                        <p className="mt-[-15px] font-bold"> #newgraduated</p>

                        <p className="mt-[-15px]"> 15222 Tweets</p>

                        <img
                            src="https://static.thenounproject.com/png/1380510-200.png"
                            width={20}
                            className="ml-[240px] mt-[-75px]"

                        />
                    </div>

                    <br /><br /><br />

                    <div className="ml-5 mt-3  mt-[65px] text-sm/8 absolute">
                        <p>Trends in World 12  </p>

                        <p className="mt-[-15px] font-bold"> #newgraduated</p>

                        <p className="mt-[-15px]"> 15222 Tweets</p>

                        <img
                            src="https://static.thenounproject.com/png/1380510-200.png"
                            width={20}
                            className="ml-[240px] mt-[-75px]"

                        />
                    </div>
                    <br /><br /><br /><br /><br /><br /><br />
                    <Link href="#"><p className="ml-5 text-sky-600 mt-[-35px]">Show More....</p></Link>

                </div>

                <br />

                {/* profile like div */}
                <div className="bg-gray-200 wi-[400px] h-[135px] rounded-2xl">
                    <h1 className="text-xl font-bold ml-5 mt-2 absolute ">who to follow</h1>

                    <div className="mt-[50px] ml-5 absolute">

                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7j9IDpZsbq4HghrNPneZustxYupRgrt0oQ&s"
                            width={35}
                        />

                        <div className="ml-[50px] mt-[-42px]">
                            <p className="font-bold">Majid Ali</p>
                            <p>@majidali</p>
                        </div>
                        <button type="button" className=" ml-[190px] mt-[-50px] absolute text-white bg-indigo-500 hover:bg-black-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-4xl text-sm px-5 py-1.5 me-2 mb-2 dark:bg-black dark:hover:bg-black-700 focus:outline-none dark:focus:ring-blue-800">Follow</button>
                        <p className="text-sky-500 mt-1">Show More...</p>

                    </div>
                    <br /><br /><br /><br /><br /><br />
                    <pre>
                        <p className="text-sm/8 text-gray-700">Terms of service  privacy policy <br /> imprint ads info More @2025</p>
                    </pre>
                </div>

            </div>
        </>
    )
}

export default RightSide
