import React, { useEffect, useReducer } from 'react';
import { data } from '../../../data';

const defaultState={
  people:data,
};
const reducer=(state,action)=>{

};
const ReducerBasics = () => {
  const [state,dispatch] = useReducer(reducer,defaultState)


  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };
  const resetPeople=()=>{
    // setPeople(data)
  }
  const clearList=()=>{
    dispatch({type:'CLEAR_LIST'})
  }
  console.log(state);
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn green' >remove</button>
          </div>
        );
      })}
      {state.people.length<1?(
        <button
        className='btn'
        style={{ marginTop: '1rem' }}
        onClick={resetPeople}
      >
        Reset
      </button>
      ):(
        <button
        className='btn'
        style={{ marginTop: '1rem' }}
        onClick={clearList}
      >
        clear items
      </button>
      )}
      
    </div>
  );
};

export default ReducerBasics;
