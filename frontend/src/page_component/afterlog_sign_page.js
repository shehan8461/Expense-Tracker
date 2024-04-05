import './afterlogsignup.css';
import logo from './dash board.png'
import logo1 from './dashboard.png'

function Whensignlog(){
    return(
<div className="whenlogorsign">
<img className="imglanding" src={logo} alt="Logo" width="28%"></img>
<img className="imglanding1" src={logo1} alt="Logo" width="20%"></img>
    <a href="addincome"><button>Add New Income</button></a> <t></t> <a href="addexpensive"><button>Add New Expensive</button></a> <t></t> <a href="addtarget"><button>Set Saving Targets</button></a><a href="details"><button>Show User Details</button></a><a href="dashboard"><button>Dashboard</button></a>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    <h1>
        Looks Like You <br></br>Haven't Added Any <br></br>Income or Expensive Records Yet.
    </h1>
    <br></br><br></br><br></br>
    <p>No Worries,just Hit the 'add' Button <br></br><t></t>To Get Started </p>
</div>
    )
}
export default Whensignlog;