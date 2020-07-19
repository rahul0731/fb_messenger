import React,{useState,useEffect} from 'react';
import './App.css';
import {Button,FormControl, Input, InputLabel} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import {IconButton} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'
function App() {
  const [input, setInput] = useState('');
  const [messages,setMessages] = useState([
   
  ]);
  const [username, setUsername] = useState('');

    //useState = variable in React
    //useEffect = run code on a condition 

  useEffect(() => {
    //run once when the app component loads
    db.collection('messages')
      .orderBy('timestamp','desc')
      .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})))
    });
  }, [])

  useEffect(() => {
   setUsername(prompt('Please Enter your Name'));

   
  }, [])   //conditions
 

  const sendMessage = (event) => {
      //all the logic to send messages goes
      event.preventDefault();
      db.collection('messages').add({
        message:input,
        username : username,
        timestamp : firebase.firestore.FieldValue.serverTimestamp()
      })
      // setMessages([...messages ,{username:username , text:input}]);
      setInput('');
  }
  console.log(input)
  return (
    <div className="App">
     <img style={{marginTop:'10px'}} src="https:facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=90&h=90"/>
     <h2>Hello Programmers 🚀 </h2>
     <h2>Welcome { username  ? username :"Unkown User"} </h2>
     <form className="app_form">
     <FormControl className="app_formControl">
      
      <Input className="app_input" placeholder="Email a message..."value={input} onChange={ event => setInput(event.target.value)}/>
      <IconButton className="app_iconButton" disabled={!input} type="submit" onClick={sendMessage} variant="contained" color="primary" >
        <SendIcon/>
      </IconButton>
     
    </FormControl>
     </form>

     <FlipMove>
     {
       messages.map(({id,message}) =>(
        <Message key={id} username = {username} message={message}/>
       ))
     }
     </FlipMove>
    

    </div>
  );
}

export default App;
