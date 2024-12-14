function TodoApp(){
    return(
        <>
            <form>
                <div className="mainContainer flex justify-center w-full h-screen bg-[#121212]">
                    <div className="todoBox" >
                            <div className="headingBox p-2 m-4 border-b-2 border-emerald-600">
                                <h1 className="ToAppHeading text-5xl">My Todo App</h1>
                            <p className="text-[#B3B3B3] text-center mt-3">this is my todo Appp created for me </p>
                            </div>
                       <div className="action">
                            <input className="text-black outline-none border rounded-md " type="text"></input>

                       </div> 

                    </div>

                </div>
            </form>

        </>
    )
}


export default TodoApp