import React from 'react'
import smallx from "../images/logo.png";
import bnxxx from "../images/catss.png";
import lihx from "../images/Home3.png";
function Sol() {
  return (
    <div>
     <section className='Sol-s' id='buy'>
     <div className='njxxxju'>
            <img src={lihx}/>
        </div>   
     <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className='small-logo' data-aos="fade-up">
                  <img src={smallx} />  
                  <h4>How to buy presale with SOL</h4>
                  <ul>
                    <li>Press ‘Buy Now’ above and connect wallet</li>
                    <li>Enter amount of SOL to swap for $SOLTY</li>
                    <li>Hey , you can also send SOL to     CcpDaAeGDwRSqZ9T7vumFQJgcnQBKj8tzrJpAxWoNUr5</li>
                    <li>Tokens will be airdropped to the sending wallet at the end of the sale.Oh and Please Don’t use a CEX to send $SOL please send directly from your wallet</li>
                    <li>Engage the power of $SOLTY red panda luck</li>
                  </ul>
                </div>
                </div> 
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className='cbx' data-aos="zoom-in">
                    <img src={bnxxx} alt='' />  
                    </div>
                    </div>  
                </div>
                </div>
                </section>   
    </div>
  )
}

export default Sol