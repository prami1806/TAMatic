import React,{useState} from 'react';

function Form(props) {
  const [name,setName]=useState("");

  function handleChange(e){
  	setName(e.target.value);
  }

  function handleSubmit(e){
	  e.preventDefault();
	  props.addTask(name);
	  setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
        	<h1> TAMatic</h1>
        	EE11001: Electrical Technology<br/>
          <br/><small>Add another student by typing roll no, separated by name.</small>
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add Student
      </button>
      <p><center>Mark your students present by checking the checkbox adjacent to them.</center></p>
    </form>
  );
}

export default Form;
