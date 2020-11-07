import React from 'react';


function Form(props) {
    return(
        <form>
        <h2 className="label-warpper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="label__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__secondary btn__lg">
          ADD
        </button>
      </form>

    );
}

export default Form;