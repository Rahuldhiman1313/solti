import React from 'react'
import logo from "../images/logo.png";
import mainlogo from "../images/x-logo.png";
import solana from "../images/solana.png";
import billi from "../images/billi.png";
import cvd from "../images/Home2.png";
import homex from "../images/Home.png";
import Copylink from './Copylink';
export default function Bannerhome() {
  return (
    <div>
        <sction className="banner">
        <div className='bux2'>
            <img src={homex}/>
        </div>  
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="Anatomy" data-aos="zoom-in">
               <img src={mainlogo} className='img-fluid' alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className="vb_xss" id="buynow">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="box-dc" data-aos="fade-up">
                <div className='solna' ><img src={solana}/></div>
                <h1>$SOLTI<br/> THE <span>RED</span> PANDA POWER presale</h1>
                <div className="meme-power"><h2>The meme power of $SOLTI on SOLANA</h2></div>
                <h3>Presale Funds raised $2,100,000 $SOLTI</h3>
                <form>
                <div className='fox'>
                    <div className='fox-x'>
                        <h4>$SOL equals</h4>
                        <div className='nmc'>
                        <input type='tex'placeholder='1'/>
                        <img src={solana}/>
                        </div>
                    </div>
                    <div className='fox-x'>
                        <h4>$SOLTI</h4>
                        <div className='nmc'>
                        <input type='tex' placeholder="50,000"/>
                        <img src={logo}/>
                        </div>
                    </div>
                </div>
                </form>
                <div className='cop-x'>
                <h4>Wallet address </h4>  
                <Copylink />
                </div>
                <p>Tokens airdropped to purchasing wallet on sale completion</p>
                <button className='buy-x'  data-bs-toggle="modal" data-bs-target="#exampleModal">BUY NOW</button>
              </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                   <div className='bo' data-aos="zoom-out">
                    <img src={billi} />
                   </div>
              </div>  
            </div>
          </div>
        </div>
        <div className='bux'>
            <img src={cvd}/>
        </div>
        </sction>
        
    </div>
  )
}
