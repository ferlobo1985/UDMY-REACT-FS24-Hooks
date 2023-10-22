import {memo} from 'react'

const AgeBtn = ({handleAge}) => {

    console.log('5-Age BTN')

    return(
        <>
            <button onClick={handleAge}>
                INCREMENT AGE
            </button>
        </>
    )
}

export default memo(AgeBtn);