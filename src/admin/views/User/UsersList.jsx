import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar } from './components';
import axios from 'axios';
import UserTestView from './Test/UserTestView';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const UsersList = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]) 
  const [sendList, setSendList]= useState([])

  const handleCreate = () => {
    axios
        .post(`http://localhost:8080/dummy/user-generator`)
        .then(response => {
          setPosts(response.data)
        })
        .catch(error => {
          alert("서버와의 연결이 되지 않았습니다.");
        })

  }


  return (
    <div className={classes.root}>
      <UsersToolbar />
      <div className={classes.content}>
        <UserTestView/>
      </div>
      {/* <button onClick={handleCreate}>
      유저 더미 데이터 생성
      </button> */}
    </div>
  );
};

export default UsersList;
