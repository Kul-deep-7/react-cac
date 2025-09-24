import React, { useEffect, useState } from 'react'


export default function RandomJokes() {

    const [jokes, setJokes] = useState({});

    function submit(){
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setJokes(data);
            })
    }

    useEffect(()=>{
        submit()
    },[])

  return (
    <>
    <div>RandomJokes</div>
    <div>{jokes.setup}</div>
    <div>{jokes.punchline}</div>
    <br></br>
    <button onClick={submit}>Change</button>
    </>
  )
}
