import "./App.css";
import { List } from "./components/generics/List";

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

  return (
    <div className="App">
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
      {/* <Counter message="The count value is" /> */}
      {/* <Private isLoggedIn={true} component={Profile} /> */}
      <List
        items={["Aaryan", "Rohit", "Riyan"]}
        onclick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onclick={(item) => console.log(item)} />
      <List
        items={[
          { firstName: "Aaryan", lastName: "Bajaj" },
          { firstName: "Rohit", lastName: "Singh" },
          { firstName: "Riyan", lastName: "Sharma" },
        ]}
        onclick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
