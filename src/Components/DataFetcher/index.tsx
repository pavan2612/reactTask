import React, { useState, useEffect } from "react";
import "./datafetcher.css"


export const DataFetcher = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<any>()
    useEffect(() => {
        
        let isCalled = false
        fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then((data) => {
            if (!isCalled) {
                let newData = data
                setData(newData.slice(0, 30))
                setLoading(false)
                isCalled = true
            }
        }).catch((error) => { console.log(error) })

        return () => {
            isCalled = false
        }
    }, [])

    return (
        <div className="data-fetcher-container">
            {loading ? 
            <div className="loading-container">
            <span className="loading">
                loading...
            </span>
            </div> :
                <>{data && data.map((item: any) => {
                    return (
                        <div key={item.idW} className="country-details">
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </div>
                        </div>
                    )
                })}
                </>
            }
        </div>
    )
}