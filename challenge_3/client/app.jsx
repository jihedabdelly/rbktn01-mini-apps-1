import React from 'react';
import ReactDOM from 'react-dom';

class Personal extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      name : '',
      email : '',
      password : ''
    }
  }

  handleChange() {

  }

  render() {
    return (
      <div>
        <form>
          Name : <input type="text" value={this.state.name}/>
          Email : <input type="email" value={this.state.email}/>
          PassWord : <input type="password" value={this.state.password}/>
          <button onClick="">Next</button>
        </form>
      </div>
    )
  }
}

checkOut=() =>{
  return <form1/>
};

var form1 = ()=>(
  <form>
    Name : <input type="text"/>
    Email : <input type= "email"/>
    PassWord : <input type="password"/>
    <button onClick="">Next</button>
  </form>
);

var form2 = ()=>(
  <form> Address
    Line 1 : <input type="number"/> Line 2 : <input type="number"/>
    City : <input type="text"/> State : <input type="text"/> ZIP Code : <input type="number"/>
  </form>
);

var form3 = ()=>(
  <form>
    Credit Card Number : <input type="number"/>
    Expiry Date : <input type="date"/>
    CVV : <input type="number" size="3"/>
    ZIP Code : <input type="number"/>
  </form>
);

var button = <button onClick={checkOut}>CheckOut</button>;




ReactDOM.render(
  <Personal/>,
  document.getElementById('app')
);

//export default Personal