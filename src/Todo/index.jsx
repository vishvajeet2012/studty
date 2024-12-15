import { useState } from "react"

function TodoApp(){
           const [value , setValue] =useState("")
const [displatTask , setDisplayTask] =useState([])

    function handelForm(e){
            e.preventDefault()
        if(value.trim()){
            setDisplayTask([...displatTask ,value])
            setValue('')
        }
    }
        function handelInput(e){
        setValue(e.target.value)
    
        }



    return(
        <>
            <form onSubmit={handelForm} >
                <div className="mainContainer flex justify-center w-full h-screen bg-[#121212]">
                    <div className="todoBox" >
                            <div className="headingBox p-2 m-4 border-b-2 border-emerald-600">
                                <h1 className="ToAppHeading text-5xl">My Todo App</h1>
                            <p className="text-[#B3B3B3] text-center mt-3">this is my todo Appp created for me </p>
                            </div>
                       <div className="action gap-3 flex justify-center space-x-2">
                            <input value={value} onChange={(e)=>{handelInput(e)}} placeholder="Enter your task" className="text-black placeholder:text-center outline-none border rounded-md " type="text"></input>
                        <button className="bg-emerald-700 text-white font-semibold  px-3 rounded-md hover:bg-green-500  cursor-help place">Add Task</button>
             </div> 

                    </div><div className="inputSection">
                                {displatTask.map((value , index)=>(
                                        <p>{value}</p>
                                    ))
                                    
                                }
                                </div></div>
            </form>

        </>
    )
}


export default TodoApp