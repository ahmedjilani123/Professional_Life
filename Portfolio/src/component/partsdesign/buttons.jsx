import React from 'react'

const Buttons = () => {
    const ClickHandlerPress = () => {
        alert("welcome");
    }
    const btnArray = [
        {
            btnName: "About",
        },
        {
            btnName: "Experience",
        },
        {
            btnName: "Technical Skills",
        },
        {
            btnName: "Soft Skills",
        },
        {
            btnName: "Contact",
        }
    ]
    return (
        <>{
            btnArray.map((item,i)=> {
               return (
                <div key={i} className='mt-4 text-orange-600 border border-orange-600 rounded-md flex justify-center p-1 hover:bg-slate-500 hover:shadow-inner'>
                    <button className='w-full' onClick={ClickHandlerPress}>{item.btnName}</button>
                </div>
               )
            })
        }
        
        </>
    )
}

export default Buttons
