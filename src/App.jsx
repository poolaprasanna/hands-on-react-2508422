function App() {
  var name ="intergalactic alliance"
  return (
    <div className="container">
    <article>
      <img src="images/group.png" alt="team picture" />
      <h1>Meet the <i style={{color:"SteelBlue"}}>StarGazers</i></h1>
      <p>Members of an <b><i>{name}</i></b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
    </article>
    <button onClick={()=>alert("button clicked")}>click Me</button>
    </div>
  )
}
export default App
