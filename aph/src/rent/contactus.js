
import Header from '../com/header';
import End from '../com/end';

const contactus = () => {
    return (
<>


<Header/>

<div className="t5">
<div style={{width: "100%"}}>

<h3 className="t98">Contact</h3>
<p className="t99">Contact with us</p>

</div>
</div>

<div className="t8">
<a href="" className="t9"> Home   </a><span>/</span><span style={{color: "gray"}}>  Contact us  </span>




</div>
<div className='t27'>

<h5 className='t25'>Find Our location</h5>
<h2 className='t26'>Map & Directions</h2>
<p className='t28'>Find out how to find us from your current location

</p>

</div>
<div className="mapi">
      <div className='imgt1'> <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13931.209901840557!2d73.15878645946188!3d29.199941736743572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393de74d46083d61%3A0x44662f3b365bf631!2sChaudhary%20kiryana%20and%20variety%20store!5e0!3m2!1sen!2sin!4v1696675110366!5m2!1sen!2sin"
            width="600" height="450" className='klop' allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" ></iframe></div> 
    </div>

    <div className='t27'><h2 className='t26'>Contact Us Live</h2></div>
    
    <div className="xz">


<div className="contact2">
    <h4 className="opy"><i className="fa fa-address-book"> </i> Address</h4>
</div>
<div className="contact2">
    <h4 className="opy"><i className="fa fa-envelope"> </i> Mail</h4>
</div>
<div className="contact2">
    <h4 className="opy"><i className="fa fa-phone-square"> </i> Call</h4>
</div>
<div className="contact2">
    <h4 className="opy"><i className="fa fa-user-circle"> </i> Social Accounts</h4>
</div>

</div>
<End/>

</>

    )
  };
  
  export default contactus ;