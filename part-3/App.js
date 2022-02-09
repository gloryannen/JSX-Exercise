const App = () => {
  return (
    <div>
      <Person name="John56789" age={ 30 } hobbies={ ["Carpentry"] } />
      <Person name="Jane" age={ 27 } hobbies={ ["Gardening"] } />
      <Person name="Bob" age={ 17 } hobbies={ ["Videogames"] } />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))