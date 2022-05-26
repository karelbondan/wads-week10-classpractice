import React from 'react'

const Test = () => {
    let test = [1, 2, 3, 4, 5, 6]

    const a = test.map((item, i, j, k) => {
        console.log(`${item} + ${i} + ${j} + ${k}`)
    })
    return (
        <div>test</div>
    )
}

export default Test