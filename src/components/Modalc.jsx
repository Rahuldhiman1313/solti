import React from 'react'
import Phantom from "../images/Phantom.png";
import Solflare from "../images/Solflare.png";
import Trust from "../images/Trust.png";
import Coinbase from "../images/Coinbase.png";
function Modalc() {
  return (
    <div>
        <div className='chain'>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      <h5 className="xss" id="exampleModalLabel">Connect Wallet</h5>
        <ul>
         <li><a href='/'><span><img src={Phantom} /></span>Phantom</a></li>
         <li><a href='/'><span><img src={Solflare} /></span>Solflare</a></li>   
         <li><a href='/'><span><img src={Trust} /></span>Trust</a></li>   
         <li><a href='/'><span><img src={Coinbase} /></span>Coinbase Wallet</a></li>      
        </ul>
       <p>If you're on mobile, please open this inside your wallet's built-in browser.</p>
       <p>If you are unable to connect your wallet, you can send the SOL directly to </p>
       <strong>
       EnSawje2vQSQKtGbPYdXEuYKm2sHgeLKJTqCmrDErKEA.
       </strong>
      </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Modalc