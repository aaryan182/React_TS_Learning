import "./App.css";
import { Counter } from "./components/class/Counter";


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
    {/* <Container styles={{border: '1px solid black', padding: '1rem'}} /> */}
    {/* <ThemeContextProvider>
      <Box />
    </ThemeContextProvider> */}
    {/* <UserContextProvider>
      <User />
    </UserContextProvider> */}
    <Counter message="The count value is" />
  </div>
}

export default App;