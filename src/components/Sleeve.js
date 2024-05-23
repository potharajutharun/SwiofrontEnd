import React from 'react';
import '../Styles/sleev.css';
import { FaApple } from "react-icons/fa6";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Sleeve() {
  return (
    <div className='container text-center m-5'>
      <h1>Sleeve 2</h1>
      <h1>The ultimate music accessory for your Mac.</h1>
      <h5 className='m-4'>Sleeve sits on the desktop, displaying and controlling the music you’re <br/>
        currently playing in 
        <img src='./images/AppMusic.png' height="20px" alt='AppMusic'/>
        &nbsp;  Apple Music, &nbsp;  
        <img src='./images/AppSpotify.png' height="20px" alt='AppSpotify'/>
        &nbsp;  Spotify, and   &nbsp; 
        <img src='./images/AppDoppler.png' height="20px" alt='AppDoppler'/>
        &nbsp;   Doppler.
      </h5>

      <div className='AppStore_btn d-flex justify-content-center m-2'>
        <div className='Mac_App m-2'>
          <button className='btn btn-primary'><span> <FaApple/></span>Mac APP Store</button>
        </div>
        <div className='Premium m-2'>
          <Link to="/sleeve/payment">
            <button className='btn btn-success text-dark fw-5'>Buy Directly <span>$5.99</span></button>
          </Link>
        </div>
      </div>

      <p className='text-muted m-4'>No subscriptions. No in-app<br/>
        purchases. Requires macOS 11 Big Sur <br/>
        or later.
      </p>

      <div className='d-flex  border  justify-content-center mumber'>
        <img src="./images/ShelfCallout.png" height="30px" alt='ShelfCallout'/>
        <span className='fw-bold'>  Now with shelves and progress bar. see whats new in Sleeve 2.3  <FaRegArrowAltCircleRight/></span>
      </div>

      <p className='m-4 text-primary'>New in <span>2.0</span></p>
      <h1> Themes. Unlimited themes.</h1>
      <h5 className='justify-content-center'>Themes in Sleeve make creating and switching between customizations easy. Share your own <br/>
        creations with friends and install as many themes as you like with just a double-click.</h5>

      <div className='d-flex '>
        <div className='d-flex col-sm-5 m-5 Change_it_up p-5'>
          <div>
            <h5>Change it up</h5>
            <p>
              Switch between themes with just a click.
            </p>
            <p>Modify the built-in themes or create your own using Sleeve’s extensive preferences.</p>
          </div>
          <div className='image_container'>
            <img src='./images/ThemeUIActive.png' className='image_top' alt='ThemeUIActive'/>
            <img src='./images/ThemeUi.png' className='image_bottom' alt='ThemeUi'/>
          </div>
        </div>
        <div className='d-flex col-sm-5 m-5 Sherable p-5'>
          <div>
            <h5>Shareable</h5>
            <p>
              Export your themes and share them with friends using the handy new Sleeve Theme file format.
              Install themes from anywhere with a double-click or a drag and drop.
            </p>
          </div>
          <div>
            <img src="./images/ThemeExport.png" alt='ThemeExport'/>
          </div>
        </div>
      </div>

      <p className='text-primary'>CUSTOMIZATION</p>
      <h1>Countless ways to customize.</h1>
      <h4>Customization is at the core of the Sleeve experience — choose from any <br/>
        combination of design choices, behaviors and settings to make Sleeve at home on <br/>
        your desktop.</h4>

      <div className='justify-content-center  image-container'>
        <img src="./images/iconArrayHotKeys.png" height="100px" className="image" alt='iconArrayHotKeys'/>
        <img src="./images/iconArrayWindow.png" height="100px" className="image overlay" alt='iconArrayWindow'/>
        <img src="./images/iconArrayInterface.png" height="100px" className="image overlay" alt='iconArrayInterface'/>
        <img src="./images/iconArrayLayout.png" height="100px" className="image overlay" alt='iconArrayLayout'/>
        <img src="./images/five.png" height="100px" className="image overlay" alt='five'/>
        <img src="./images/eight.png" height="100px" className="image overlay reverse" alt='eight'/>
        <img src="./images/nine.png" height="100px" className="image overlay reverse" alt='nine'/>
        <img src="./images/seven.png" height="100px" className="image overlay reverse" alt='seven'/>
        <img src="./images/ten.png" height="100px" className="image overlay reverse" alt='ten'/>
      </div>

      <div className='container-fluid-twist  '>
        <div>
          <img src='./images/seven.png' alt='Artwork'/>
          <h1>Artwork</h1>
          <p>
            Scale artwork all the way up or all <br/>
            the way down. Round the corners <br/>
            or leave them square.
          </p>
          <p>
            Choose shadow and lighting <br/>
            effects to bring your album  <br/>artwork to life.
          </p>
          <p>
            Or hide it completely.
          </p>
        </div>
      </div>

      <div className='container-fluid-twist'>
        <div>
          <img  src="./images/eight.png" alt='Artwork'/>
          <h1>Topology</h1>
          <p>
            Pick the track info you want to display, 
            <br/>and then exactly how to  <br/>
            display it.
          </p>
          <p>
            Choose the fonts, weights, sizes,  <br/>and transparency to use for each line, <br/> along with customizing color and shadow..
          </p>
        </div>
      </div>

      <div className='container-fluid-twist'>
        <div>
        <img src="./images/iconArrayWindow.png" height="100px"  alt='iconArrayWindow'/>
        <img src="./images/nine.png" height="100px"  alt='nine'/>
        <img src="./images/iconArrayInterface.png" height="100px"  alt='iconArrayInterface'/>
          <h1>Interface</h1>
          <p>
          Customize the layout,  <br/>alignment and position to <br/> fit your setup.
          </p>
          <p>
          Customize the layout, <br/> alignment and position to fit your setup.
          </p>
          
        </div>
      </div>

      <div className='container-fluid-twist'>
        <div>
        <img
 src="./images/iconArrayHotKeys.png" height="100px" alt='iconArrayHotKeys'/>
 <img src="./images/iconArrayWindow.png" height="100px"  alt='iconArrayWindow'/>
 <img src="./images/ten.png" height="100px" alt='ten'/>
   <h1>Settings</h1>
   <p>
   Decide if Sleeve stays out of <br/> the way, behind windows,  <br/>or in front of them — or only when you need to see it.
   </p>
   <p>
   Show it in the Dock,  <br/>choose from custom icons,  <br/>or keep it on the Desktop only.
   </p>
   <p>
   Set your custom keyboard <br/> shortcuts and integrate with the apps <br/> you use.
   </p>
 </div>
 <div className='text-center text-danger '>
<p className='text-center text-danger'>Integrations</p>
<h1>Like,Scrobble.</h1>
</div>

</div>


</div>
);
}

export default Sleeve;
