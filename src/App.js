// App.js는 index.js에 의해 호출되어 출력된다

import './App.css';
import Hello from './component/Hello';
// <Hello /> : Hello.js 안에는 World.js를 포함하고 있다
// Hello.js만 import해도 World.js의 내용이 함께 출력된다
import styles from "./App.module.css"
import EventTest from './component/EventTest';
import StateTest from './component/StateTest';
import UseEffectTest from './component/UseEffect';
import Counter from './component/Counter';
import Props1 from './component/Props1';
import PropsParent from './component/PropsParent';
import LoginRendering from './component/LoginRendering';
import ListExample from './component/ListExample';
import FormExample from './component/FormExample';
import FormExample2 from './component/FormExample2';
import UserForm from './component/UserForm';

function App() {
  return (
    <div className={styles.box}>
      <h1>App.js</h1>
      <Hello /> 
      
      <br /><br />
      <EventTest />

      <br /><br />
      <StateTest />

      <br /><br />
      <UseEffectTest />

      <br /><br />
      <Counter />

      <br /><br />
      {/* <Props1 /> */}
      <Props1 subject = "자바" />

      <br /><br />
      <PropsParent />

      <br /><br />
      <LoginRendering />
      
      <br /><br />
      <ListExample />

      <br /><br />
      <FormExample />

      <br /><br />
      <FormExample2 />

      <br /><br />
      <UserForm />
    </div>
  );
}

export default App;
