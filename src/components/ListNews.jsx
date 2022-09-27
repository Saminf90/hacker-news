import React, { useEffect, useState } from 'react'

export default function ListNews(props) {

    const data = props.data
    console.log("Data arrived at ListNews", props, data)
    return (
        <div>
            <h1>Hello!</h1>
        </div>
    )
}