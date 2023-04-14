import React from 'react'

export default function Dashboardsecgrid() {
    return (
        <div className='flex gap-4 p-4 text-white w-full'>
            <Wrapper>
                <div>
                </div>
            </Wrapper>
            <Wrapper>Grid</Wrapper>
            <Wrapper>Grid</Wrapper>
            <Wrapper>Grid</Wrapper>
        </div>
    )
}

function Wrapper({ children }) {
    return <div className='bg-black rounded-sm p-4 flex-1 items-center'>{children}</div>
}


