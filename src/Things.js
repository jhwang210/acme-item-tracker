import React from 'react';
import ThingForm from './ThingForm';
import { connect } from 'react-redux';
import axios from 'axios';

const Things = ({ things, deleteThing })=> {
  return (
    <div>
      <h1>Things</h1>
      <ul>
        {
          things.map( thing => {
            return (
              <li key={ thing.id }>
                <div>
                  { thing.name }
                  <button onClick= {() => deleteThing( thing )}>x</button>
                </div>
                <div>
                  { thing.ranking }
                  <button>+</button>
                  <button>-</button>
                </div>

              </li>
            );
          })
        }
      </ul>
      <ThingForm />
    </div>
  );
};

const mapStateToProps = (state)=> {
  return {
    things: state.things
  };
}

const mapDispatchToProps = (dispatch)=> {
  return {
    deleteThing: async( thing )=> {
      await axios.delete(`/api/things/${thing.id}`);
      const response = await axios.get('/api/things');
      const things = response.data;
      dispatch({ type: 'DELETE_THING', things });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Things);