import logo from './logo.svg';
import './App.css';

//App components declare logic + view 

function App() {
  return (
    <div className="App">
      <User name="SaraVanan🖤💛" 
      pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_jBNGDAl_gCziVLX5q8vuci3Z8VmfK8Rrdtct54&s" />
      <User name="Ravi" 
      pic="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5zdGFncmFtJTIwcHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
      <User name="John"
      pic="https://wallpaperaccess.com/full/2213424.jpg"/>
    </div>
  );
}

function User({pic,name}){
  // console.log(props, typeof props);
  return (
    <>
  <img className='user-profile-pic' src={pic}/>
  <h1 className="user-name"> 
  Hello <span className='user-first-name'>{name}</span></h1>
  </>
  );

}


export default App;


