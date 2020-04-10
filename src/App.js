import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Button from './Button';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      display:'0',
      operator:null,
      operand:false,
      finalval:null
    }
  }
  addToInput(digit){
    if(this.state.operand){
      this.setState({
        display:String(digit),
        operand:false
    })
    }else{
       this.setState({
         display:this.state.display=='0'?String(digit):this.state.display+digit})
    }
  }
  inputPoint(){
    if(this.state.operand){
      this.setState({
        display:'.',
        operand:false
      })
    }
    else if(this.state.display.indexOf('.')===-1){
    this.setState({
      display:this.state.display +'.',
      operand:false
    })
  }
}
operation(op){
  const next=parseFloat(this.state.display)
  const operation={
    '/':(prev,next)=>prev/next,
    '*':(prev,next)=>prev*next,
    '+':(prev,next)=>prev+next,
    '-':(prev,next)=>prev-next,
    '=':(prev,next)=>next
  }
  if(this.state.finalval==null){
    this.setState({
      finalval:next
    })
  }else if(this.state.operator){
    const currentval=this.state.finalval || 0
    const computedval=operation[this.state.operator](currentval,next)

    this.setState({
      finalval:computedval,
      display:String(computedval)
    })
  }
    this.setState({
    operand:true,
    operator:op
  })
}
clear(){
  this.setState({
    display:'0'
  })
}
  render(){
    const styles={
      backgroundColor:'rgb(197, 240, 238)',
      width:'100px',
      height:'5em',
      fontSize:'.8em',
      fontWeight:'bold' 
    };
  return (
    <div className="App">
      {/* <pre>{JSON.stringify(this.state,null,2)}</pre> */}
      <div className="calc-wrapper">
      <div className="calc-display">{this.state.display}</div>
       <div className="row">
          <Button ><button style={styles} onClick={()=>this.addToInput(7)}>7</button></Button>
          <Button ><button style={styles} onClick={()=>this.addToInput(8)}>8</button></Button>
          <Button ><button style={styles} onClick={()=>this.addToInput(9)}>9</button></Button>
          <Button ><button style={styles} onClick={()=>this.operation('/')}>/</button></Button>
       </div>
       <div className="row">
          <Button><button style={styles} onClick={()=>this.addToInput(6)}>6</button></Button>
          <Button><button style={styles} onClick={()=>this.addToInput(5)}>5</button></Button>
          <Button><button style={styles} onClick={()=>this.addToInput(4)}>4</button></Button>
          <Button><button style={styles} onClick={()=>this.operation('*')}>*</button></Button>
       </div>
       <div className="row">
          <Button><button style={styles} onClick={()=>this.addToInput(3)}>3</button></Button>
          <Button><button style={styles} onClick={()=>this.addToInput(2)}>2</button></Button>
          <Button><button style={styles} onClick={()=>this.addToInput(1)}>1</button></Button>
          <Button><button style={styles} onClick={()=>this.operation('+')}>+</button></Button>
       </div>
       <div className="row">
          <Button ><button style={styles} onClick={()=>this.inputPoint()}>.</button></Button>
          <Button><button style={styles} onClick={()=>this.addToInput(0)}>0</button></Button>
          <Button><button style={styles} onClick={()=>this.operation('=')}>=</button></Button>
          <Button><button style={styles} onClick={()=>this.operation('-')}>-</button></Button>
       </div>
       <div className="clear">
       <button  onClick={()=>{this.clear()}}>Clear</button>
       </div>
    </div>
    </div>
  );
}
}
export default App;
