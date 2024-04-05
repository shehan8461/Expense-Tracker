
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AddAccount from './register_component/adduser';
import Userdetails from './register_component/userdetails';
import UpdateUser from './register_component/updateuser';
import AddExpense from './expense_component/addexpense';
import Incomedetails from './income_componenet/incomedetails';
import UpdateIncome from './income_componenet/incomeupdate';
import Expensedetails from './expense_component/expensedetails';
import UpdateExpence from './expense_component/expenseupdate';
import Targetdetails from './target_component/targetdetails';
import AddTarget from './target_component/addtarget';
import UpdateTarget from './target_component/updatetarget';
import AddIncome from './income_componenet/addincome';
import LandingPage from './page_component/landingpage';
import Header from './page_component/header';
import Whensignlog from './page_component/afterlog_sign_page';
import DashBoard from './dashboard_component/dashboard';
import Login from './login_component/login';
import Saving from './page_component/screeafter';

function App() {
  return (
    <div className="App">
   <Router>
<Header/>
 <Routes>

 <Route path='/' element={<LandingPage/> }></Route>

<Route path='/addaccount' element={<AddAccount/> }></Route>
<Route path='/details' element={<Userdetails/>}></Route>
<Route path='/update_user/:id' element={<UpdateUser/>}></Route>

<Route path='/addexpensive' element={<AddExpense/>}></Route>
<Route path='/expense_details' element={<Expensedetails/>}></Route>
<Route path='/update_expense/:id' element={<UpdateExpence/>}></Route>

<Route path='/addincome' element={ <AddIncome/> }></Route>
<Route path='/income_details' element={<Incomedetails/>}></Route>
<Route path='/update_income/:id' element={<UpdateIncome/>}></Route>


<Route path='/addtarget' element={  <AddTarget/> }></Route>
<Route path='/target_details' element={<Targetdetails/>}></Route>
<Route path='/update_target/:id' element={<UpdateTarget/>}></Route>


<Route path='/afterlogorsign' element={<Whensignlog/>}></Route>


<Route path='/dashboard' element={<DashBoard/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/saving' element={<Saving/>}></Route>

   </Routes>
   </Router>
    </div>
  );
}

export default App;
