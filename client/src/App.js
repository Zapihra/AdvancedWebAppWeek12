import './App.css';

function App() {

  const submitForm = (event) => {
    //console.log("hello")
    
    var name = event.target.name.value
    var author = event.target.author.value
    var pages = event.target.pages.value

    //console.log(name, author, pages)
    fetch("/api/book", {
      method: "POST",
      headers: {
      "Content-Type": "application/json"},
      body: JSON.stringify({
        "name": name,
        "author": author,
        "pages": pages
      })
    }).then(data => {
      console.log(data)
    })

  }
  


  return (
    <>
    <div>
      <h1>books</h1>     

      <form onSubmit={(event) => {
        event.preventDefault()
        submitForm(event)

      }}>
        name<input id="name"/> <br/>
        author<input id="author"/> <br/>
        pages<input id="pages" type="number"/><br/>
        <input id="submit" type="submit" />
      </form>
    </div>
    
    </>
  );
}

export default App;
