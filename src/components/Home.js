import React from 'react';
import '../Styles/Home.css';
import { BsCaretLeftFill } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-4">
      <div className="flex pt-4 home__container m-5 fs-5">
        <h3 className="text user_id">
          A tiny studio making delightful for <br/>
          <span className="hidden user_id">brought to you by </span>
          <span className="inline user_id">from </span>
          <a href="https://www.alasdairmonk.com" target="_blank"  rel="noreferrer" className="relative text-decoration-none text-dark">
            <span className="relative">
              <img src="./images/roundle.svg" alt="Avatar for Alasdair Monk" width="32" height="32" className="relative rounded-full"/>
            </span>
            <span className="relative user_id text-decoration-none"> @almonk </span>
          </a>
          &amp; <br/>
          <a href="https://hector.me" target="_blank" rel="noreferrer" className="relative text-decoration-none text-dark">
            <span className="relative-text  ">
              <img src="./images/avatar.jpg" alt="Avatar for Hector Simpson" width="30" height="30" className="relative rounded-full "/>
            </span>
            <span className="relative user_id "> @dizzyup</span>
          </a>
        </h3>
      </div>

      <div className="row align-items-center "> 
        <div className="col-md-6 ">
          <Link to="sleeve" className="d-block m-2 bg-primary music_div rounded-5 text-decoration-none text-white">
            <div className="d-flex align-items-center justify-content-center music_innerdiv">
              <img src="./images/sleev.png" alt="Sleeve" className="img-fluid me-3"/>
              <div>
                <h1 className="mb-0">Sleeve<span className="badge fs-1">2</span></h1>
                <h5 className="mb-0">The Ultimate Music <br/> accessory for your Mac</h5>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-6 p-5 ">
          <Link to="umbra" className="d-block m-5  umbra_div text-decoration-none rounded-5 ">
            <div className="d-flex align-items-center  p-5 ">
              <img src="./images/umbra100.png" height="200px" alt="Umbra" className="me-3"/>
              <div>
                <h1 className="mb-0 text-white">Umbra</h1>
                <h5 className="mb-0 text-white">The missing app <br/> for Dark mode</h5>
              </div>
            </div>
          </Link>
          <Link to="#" className="d-block rounded-5 m-5  text-dark bumb_div text-decoration-none">
            <div className="d-flex align-items-center">
              <img src="./images/Hero.png" height="250px" alt="Bumb" className="me-3"/>
              <div>
                <h1 className="mb-0">Bumb</h1>
                <h5 className="mb-0">Release &amp; update indie <br/> Mac apps</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className='row'>
        <div className='col-md-6'>
          <p>© 2024 Replay Software. All Rights Reserved.</p>
        </div>
        <div className='col-md-6 '>
          <div className='social-icons d-flex justify-content-end'>
            <div>
            <a href='https://x.com/softwarereplay' className='me-3 text-decoration-none text-dark'>
              <RiTwitterXFill />
            </a>
            </div>
            
            <div className='social-icons-image'>
              <Link to="/" className='text-decoration-none'>
                <span style={{ fontWeight: 'bolder' }}>REPL</span>
                <BsCaretLeftFill style={{ fontWeight: 'bolder' }} className='icon' />
                <span style={{ fontWeight: 'bolder' }}>Y</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
