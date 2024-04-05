import "./saving.css";
import logo from './savings target.png';

function Saving(){

    return(
        <div className="all">
            <img className="imgafter" src={logo} alt="Logo" width="40%"></img>
 <div className="nav-new">
     <a href="addincome"><button>Add New Income</button></a> <t></t> <a href="addexpensive"><button>Add New Expensive</button></a> <t></t> <a href="addtarget"><button>Set Saving Targets</button></a>
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br></div>
            <div className = "para1">
            <p>
            * Congratulations On Setting Your Savings Target! *<br></br><br></br>
            Great Job Taking That First Step Towards Financial Success! As A Reward For Your Dedication, You're Now Enrolled To Receive a
            pesonalized saving tips straight. To your email inbox <br></br><br></br>
            These tips are designed to help you achieve your savings goal with ease.
            From Budgeting Hacks To Smart Spending Strategies, We've Got You Covered!<br></br><br></br>
            Keep An Eye On Your Email For Your First Batch Of Helpful Tips, And Get
            Ready To Supercharge Your Savings Journey!<br></br><br></br>
            Here's To Reaching Your Goals And Securing Your Financial Future!
            </p>
            </div>

            <br></br>

            <button className="btnBack"><a href="dashboard">BACK TO DASHBOARD </a></button>
            

            <br></br>

            <p className="help">
                Need help? - Talk to us (abc@gmail.com)
            </p>




        </div>




    )

}

export default Saving;

