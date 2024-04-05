import './landing.css'
import logo from './home1.png';
import logo1 from './home2.png';


function LandingPage(){
    return (
 //home page     
<div className="landing-page">
<img className="img" src={logo} alt="Logo" width="20%"></img>
<img className="img1" src={logo1} alt="Logo" width="20%"></img>
<body className='landigbdy'>
<h1> Manage And Track <br></br> ALL Your Finances <br></br>Inside One Place</h1>
<p>The cost of a track weekend is kind of elusive, but it does add up.<br></br> The price the organizer charges is based on a lot of different things,<br></br> but the major cost is the facility itself. A place like Circuit of the Americas is much more expensive than a place like Summit Point. I love both places, <br></br>but understand why CotA is more expensive.</p>
<a href="/addaccount"> <button >Sign Up</button> </a> <t></t>  <a href="login"> <button >Log In</button> </a>
</body>
</div>
    )
}
export default LandingPage