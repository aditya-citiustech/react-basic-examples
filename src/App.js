import logo from './logo.svg';
import './App.css';
import MyArray from './concepts/myArray';
import Controlled from './concepts/controlled';
import UnControlled from './concepts/uncontrolled';
import Parent from './concepts/Communication/parent';
import ParentContent from './concepts/projection/parent';
import A from './concepts/statelift/A';
import SwitchMethod from './concepts/conditional_rendering/switchmethod';
import EnumMethod from './concepts/conditional_rendering/enummethod';
import UseEffectDemo from './concepts/hooks/useeffect';
import Comp1 from './concepts/hooks/propdrill/comp1';
import C1 from './concepts/hooks/usecontext/c1';
import Increment from './concepts/hooks/usecallback/increment';
import Users from './concepts/hooks/custom/users';
import AddText from './concepts/hooks/usecallback/addtext';
import Main from './concepts/errorhandling/main';
import Wrap from './concepts/errorhandling/reset/wrap';
import Routers from './concepts/routes';

function App() {
  return (
  <div>
    <h1>Hello!</h1>
    <MyArray/>
    <Controlled/>
    <UnControlled/>
    <Parent/>
    <ParentContent/>
    <A/>
    <SwitchMethod/>
    <EnumMethod/>
    {/* <UseEffectDemo/> */}
    <Comp1/>
    <C1/>
    {/* <Users/> */}
    {/* <Main/> */}
    {/* <AddText/>
    <Wrap/> */}
    <Routers/>
  </div>
  );
}

export default App;
