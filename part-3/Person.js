const Person = (props) => {
  let reply;
  let hobbies = props.hobbies.map(h => <li>{ h }</li>);

  if (props.age > 18) {
    reply = "Please go vote!"
  } else {
    reply = "You must be 18"
  }

  return (
    <div>
      <p>Learn some information about this person</p>
      <ul>
        <li>Name: { props.name.substr(0, 8) }</li>
        <li>Age: { props.age }</li>
        <ul>
          Hobbies
          { hobbies }
        </ul>
      </ul>
      <h3>{ reply }</h3>
    </div>
  )
}