import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Input } from "./components/Input";

function App() {
  // const personName = {
  //   firstName: "Aaryan",
  //   lastName: "Bajaj",
  // }

  // const nameList = [
  //   {
  //     firstName: "Aaryan",
  //     lastName: "Bajaj",
  //   },
  //   {
  //     firstName: "Rohit",
  //     lastName: "Singh",
  //   },
  //   {
  //     firstName: "Riyan",
  //     lastName: "Sharma",
  //   },
  // ]
  
  return <div className="App">
    {/* <Greet name="Aaryan" messageCount={18} isLoggedIn={true}/>
    <Person name = {personName}/>
    <PersonList names = {nameList}/> */}
    {/* <Status staus = "loading"/>
    <Heading>Heading</Heading>
    <Oscar>
      <Heading>Oscar goes to India</Heading>
    </Oscar>
    <Greet name="Aaryan" messageCount={18} isLoggedIn={true}/> */}
    {/* <Button handleClick={(event,id) => console.log('Button Clicked' , event, id)} />
    <Input value="" handleChange={(event) => console.log(event)} /> */}
    <Container styles={{border: '1px solid black', padding: '1rem'}} />
  </div>
}

export default App;