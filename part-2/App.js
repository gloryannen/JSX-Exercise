const App = () => {
  return (
    <div>
      <Tweet username="John123" name="John" date="1/1/2000" message="It's my birthday!" />
      <Tweet username="Jane123" name="Jane" date="2/2/2001" message="I found a turtle today." />
      <Tweet username="BobX" name="Bobby" date="3/3/2003" message="What do you think of this hat?" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))