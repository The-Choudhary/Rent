
export default function Header3 (){
const bar =()=>{
if(document.getElementById('base').style.width=='20%')
    {
        document.getElementById('base').style.width='0px';
        document.getElementById('bg-color').style.width="100%";

        document.getElementById('bg-color').style.marginLeft="0px";
    document.getElementById('f-base').style.width="77%";
    }
else{
    document.getElementById('base').style.width='20%';
    document.getElementById('bg-color').style.width="80%";

    document.getElementById('bg-color').style.marginLeft="20%";
    document.getElementById('f-base').style.width="71%";
}

};

const mod =()=>{
if(
    document.getElementById('pl').style.height=="99px")
{
    document.getElementById('pl').style.height="0px";}
else{
    document.getElementById('pl').style.height="99px";}
};

const okk =()=>{
    if(
        document.getElementById('okk').style.height=="99px")
    {
        document.getElementById('okk').style.height="0px";}
    else{
        document.getElementById('okk').style.height="99px";}
    };
return(
<>
<div className="fold">


<div className="bar2" id="base">
<p ><i class="fa fa-user bar bar1 "><span className="span">Dark Mod</span></i></p>
<p className="pl"><i class="fa fa-tachometer "><span className="span1">Dashboard</span></i></p>
<p className="pl"><i class="fa fa-laptop"><span className="span1">Elements</span></i></p>
<p className="pl" onClick={mod} ><i class="fa fa-th"><span className="span1">Catagories</span></i></p>
<div className="llo" id="pl">
<p className="pl1">Add Catagories</p>

<p className="pl1">View Catagories</p>


</div>


<p className="pl"><i class="fa fa-keyboard-o"><span className="span1">Forms</span></i></p>
<p className="pl" onClick={okk}><i class="fa fa-table"><span className="span1">Tables</span></i></p>

<div className="llo" id="okk">
<p className="pl1">Add Catagories</p>

<p className="pl1">View Catagories</p>
</div>




<p className="pl"><i class="fa fa-bar-chart"><span className="span1">Charts</span></i></p>
<p className="pl"><i class="fa fa-file "><span className="span1">Pages</span></i></p>
</div>

<div className="bg-color" id="bg-color">
   
   <p onClick={bar} className='bar g-base'><i className="fa fa-bars"> </i></p>

<form>

<input className="s-bar" type="text" placeholder="Search"/>


</form>

<div className="f-base" id="f-base">
<a className='bar margin'><i className="fa fa-envelope"><span className="span">Message</span> </i></a>

<a className='bar margin'><i className="fa fa-bell"><span className="span">Notification</span> </i></a>


<a className='bar margin'><img src="##"/><span className="span">Aman</span> </a>


</div>





</div>


</div>
</>

)

}