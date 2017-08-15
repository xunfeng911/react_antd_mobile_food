import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Bundle from './bundle';

// import HomeCon from 'bundle-loader?lazy&name=app-[name]!../components/home/home'
// import AnnounceCon from 'bundle-loader?lazy&name=app-[name]!../components/announce/announce'
// import MyProCon from 'bundle-loader?lazy&name=app-[name]!../components/mypro/mypro'

// import UserCon from 'bundle-loader?lazy&name=app-[name]!../components/user/user'
// import UsrInfoCon from 'bundle-loader?lazy&name=app-[name]!../components/user/usr_info'
// import SetQQCon from 'bundle-loader?lazy&name=app-[name]!../components/user/set_qq'
// import SetNameCon from 'bundle-loader?lazy&name=app-[name]!../components/user/set_name'

// import LoginCon from 'bundle-loader?lazy&name=app-[name]!../components/login/login'
// import RegisterCon from 'bundle-loader?lazy&name=app-[name]!../components/register/register'
// import ResetCon from 'bundle-loader?lazy&name=app-[name]!../components/register/reset'
// import NewPassCon from 'bundle-loader?lazy&name=app-[name]!../components/register/newpassword'


const Home = (props) => (
  <Bundle load={() => import('../components/home/home.jsx')}>
    {(Home) => <Home {...props}/>}
  </Bundle>
)

const Announce = (props) => (
  <Bundle load={() => import('../components/announce/announce.jsx')}>
    {(Announce) => <Announce {...props}/>}
  </Bundle>
)

const MyPro = (props) => (
  <Bundle load={() => import('../components/mypro/mypro.jsx')}>
    {(MyPro) => <MyPro {...props}/>}
  </Bundle>
)

const User = (props) => (
  <Bundle load={() => import('../components/user/user.jsx')}>
    {(User) => <User {...props}/>}
  </Bundle>
)

const UsrInfo = (props) => (
  <Bundle load={() => import('../components/user/usr_info.jsx')}>
    {(UsrInfo) => <UsrInfo {...props}/>}
  </Bundle>
)

const SetQQ = (props) => (
  <Bundle load={() => import('../components/user/set_qq.jsx')}>
    {(SetQQ) => <SetQQ {...props}/>}
  </Bundle>
)

const SetName = (props) => (
  <Bundle load={() => import('../components/user/set_name.jsx')}>
    {(SetName) => <SetName {...props}/>}
  </Bundle>
)

const Login = (props) => (
  <Bundle load={() => import('../components/login/login.jsx')}>
    {(Login) => <Login {...props}/>}
  </Bundle>
)

const Register = (props) => (
  <Bundle load={() => import('../components/register/register.jsx')}>
    {(Register) => <Register {...props}/>}
  </Bundle>
)

const Reset = (props) => (
  <Bundle load={() => import('../components/register/reset.jsx')}>
    {(Reset) => <Reset {...props}/>}
  </Bundle>
)

const NewPass = (props) => (
  <Bundle load={() => import('../components/register/newpassword.jsx')}>
    {(NewPass) => <NewPass {...props}/>}
  </Bundle>
)
// import Home from '../components/home/home';
// import Announce from '../components/announce/announce';
// import MyPro from '../components/mypro/mypro';

// import User from '../components/user/user';
// import UsrInfo from '../components/user/usr_info';
// import SetQQ from '../components/user/set_qq';
// import SetName from '../components/user/set_name';

// import Login from '../components/login/login';
// import Register from '../components/register/register';
// import Reset from '../components/register/reset';
// import NewPass from '../components/register/newpassword';

const RouteConfig = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/anc' exact component={Announce} />
      <Route path='/user' exact component={User} />
      <Route path='/login' exact component={Login} />
      <Route path='/register' exact component={Register} />
      <Route path='/reset' exact component={Reset} />
      <Route path='/newpass' exact component={NewPass} />
      <Route path='/usrInfo' exact component={UsrInfo} />
      <Route path='/setqq' exact component={SetQQ} />
      <Route path='/setname' exact component={SetName} />
      <Route path='/mypro' exact component={MyPro} />
    </Switch>
  </Router>
)
export default RouteConfig;