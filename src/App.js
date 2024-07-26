function App(props) {
	const currDate = new Date();
  
	return (
	  <div>
		<h1>This is Nima!</h1>
		<h2>The time now is {currDate.toLocaleTimeString()}.</h2>
		<h2>The date now is {currDate.toDateString()}.</h2>
	  </div>
	);
  }
  
  export default App;