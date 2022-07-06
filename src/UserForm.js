import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const UserForm = ({ createUser })=> {
  return (
    <div>
      <button onClick={ createUser }>Create User</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch)=> {
  return {
    createUser: async()=> {
      const response = await axios.post('/api/users', { name: Math.random()});
      const user = response.data;
      dispatch({ type: 'CREATE_USER', user });
    }
  };
}

export default connect(null, mapDispatchToProps)(UserForm);
