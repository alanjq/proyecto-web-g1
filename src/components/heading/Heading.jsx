import React from 'react';

function Heading({ sub, children }) {
    return (
        <div className='flex flex-col uppercase text-center my-4  mb-2'>
            {sub &&
                <div className="flex-auto text-sm text-yellow-500">
                    {sub}
                </div>
            }
            <div className="flex-auto text-2xl text-slate-700 font-bold">{children}</div>
            <div className="flex gap-2 mx-auto">
                <span className="border-b-2 w-12 border-slate-500"></span>
                <span className="border-b-2 w-4 border-slate-500"></span>
            </div>
        </div>
    )
}
export default Heading
