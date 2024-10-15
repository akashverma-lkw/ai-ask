import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

const Main = () => {
  const avtImg = "https://cdni.iconscout.com/illustration/premium/thumb/female-avatar-illustration-download-in-svg-png-gif-file-formats--young-woman-girl-portraits-pack-people-illustrations-6590630.png?f=webp";
  const aiImg = "https://toppng.com/uploads/preview/artificial-intelligence-is-changing-the-legal-profession-artificial-intelligence-logo-11563062027pg19tyb3sh.png";
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  return (
    <div className='main'>
      <div className="main-container">

        {!showResult
          ? <>
            <div className="greet">
              <p><span>Hello, User...</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on a upcoming road trip with your loved ones.</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Search innovative things today and improve your skill and knowledge.</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Find here anything what you have in your mind just ... <br />ask me right now</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Coding related problem ! Let me see your code May be I can give a better solution</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
          : <div className='result'>
            <div className="result-title">
              {/* <img src={assets.user_icon} alt="" /> */}
              <img src={avtImg} alt="" />
              <p>Hi, Erica here ...</p>
              {/* <p>{recentPrompt}</p> */}
            </div>
            <div className="result-data">
              {/* <img src={assets.gemini_icon} alt="" /> */}
              <img src={aiImg} alt="" />

              {loading
              ?<div className='loader'>
                <hr />
                <hr />
                <hr />
              </div>
              :<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
              
            </div>
          </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" name="" placeholder='Enter a promt here ...' id="" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className="bottom-info">
            Information may be varry, including subject, data or anything. Please do cross check.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main;