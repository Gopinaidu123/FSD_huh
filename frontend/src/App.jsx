import './App.css'

function App() {
  let baseURL = "" ;
  const fetchData =() => {
    axios.get(`${baseURL}/get-students`)
    .then((result) => console(result.data))
    .catch((error) => console.log(error));
  };
  let myuser={
    name:"thub",
    roll : "123" 
  };
  const addstudent =() => {
     axios.get(`${baseURL}/new-students`)
    .then((result) => console(result.data))
    .catch((error) => console.log(error));
  }

  return (
    <>
      
    </>
  )
}

export default App