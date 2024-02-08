


const header = () => {

    const Okk =()=>{
        if(document.getElementById('Bar').style.height=='290px')
        {document.getElementById('Bar').style.height='0px'}
        else{document.getElementById('Bar').style.height='290px'}
      };

    return (
<>






<div className="secondhead">
<div className="logo">
    <a><img src="https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/logo-1.png"/></a>
</div>
<div className="mjk" >
< i className="cfy fa fa-bars" onClick={Okk}></i>

</div>
<div className="cxz"id="Bar" >
<a className="cvv" href="/"><h3>Home</h3></a><hr/>
<a className="cvv" href="multi-concept-house appartment"><h3>Booking</h3></a><hr/>
<a className="cvv" href="rent"><h3>Rent</h3></a><hr/>
<a className="cvv" href="about-us"><h3>About Us</h3></a><hr/>
<a className="cvv" href="contact-us"><h3>Contact Us</h3></a>

</div>
<div className="option" >
    <a className="opt" href="/">
        <h3>Home </h3>
    </a>

    <a className="opt" href="multi-concept-house appartment">
        <h3>Booking</h3>
    </a>

    <a className="opt" href="rent">
        <h3>Rent</h3>
    </a>

    <a className="opt" href="about-us">
        <h3>About Us</h3>
    </a>

    <a className="opt" href="contact-us">
        <h3>Contact Us</h3>
    </a>
</div>

</div>







</>

    )
  };
  
  export default header;
  