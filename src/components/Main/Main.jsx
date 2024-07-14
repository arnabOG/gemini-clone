import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src="https://lh3.googleusercontent.com/a/ACg8ocLaxlrxh87cQdDP9e0F2tgpZYeu-pQHpqNzhVxACuEmq4ah0zA=s64-c" alt="" />
      </div>
      <div className="main-container">

        {!showResult
        ? <>
        <div className="greet">
            <p><span>Hello, Arnab</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Write code for a specific task, including edge cases</p>
                <img src={assets.code_icon} alt="" />
            </div>

            <div className="card">
                <p>Help me get organized with a list of 10 tips</p>
                <img src={assets.message_icon} alt="" />
            </div>

            <div className="card">
                <p>Come up with a product name for a new app</p>
                <img src={assets.bulb_icon} alt="" />
            </div>

            <div className="card">
                <p>Help me find YouTube videos to care for a specific plant</p>
                <img src={assets.youtube_icon} alt="" />
            </div>
        </div>
        </>
        :<div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
              ?<div className='loader'>
                  <hr />
                  <hr />
                  <hr />
              </div>
              : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }

            </div>
        </div>
        }

        
          <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
          Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
