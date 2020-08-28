import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Checkbox, 
  FormControlLabel, 
  FormGroup, 
  Box
} from '@material-ui/core';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  }
}));

const UserTestBody = (props) => {
    const classes = useStyles();
    const {UserData, setClose, className} = props
    // const {UserData} = props    
    const [userNo, setUserNo] = useState(UserData.userNo)
    const [userId, setUserId] = useState(UserData.userId)
    const [name, setName] = useState(UserData.name);
    const [password, setPassword] = useState(UserData.password)
    const [email, setEmail] = useState(UserData.email);
    const [phone, setPhone] = useState(UserData.phone)
    const [birthday, setBirthday] = useState(UserData.birthday)

    // const [close, setClose]= useState()
    const [values, setValues] = useState([]);
    
    const [checked, setChecked] = useState({
      checkBox1 : false,
      checkBox2 : false,
      checkBox3 : false,
    })

    const history = useHistory();

    // useEffect(()=>{
    //   switch(UserData.businessStatus){
    //     case `영업중`: return setChecked({...checked, checkBox1:true})
    //     case `폐업`: return setChecked({...checked, checkBox2:true})
    //     case `휴업`: return setChecked({...checked, checkBox3:true})
    //   }
    // }, [])


    const handleClose = () => {
      setClose(false);
    }
    
    // const handleChange = event => {
    //   setValues({
    //     ...values,
    //     [event.target.name]: event.target.value
    //   });
    // };
    // const handleCheckBox = event => {
    //   setChecked({checked, [event.target.name]: event.target.checked })
    //   if(event.target.checked===true){
    //     switch(event.target.name){
    //       case "checkBox1": return setBusinessStatus("영업중")
    //       case "checkBox2": return setBusinessStatus("폐업")
    //       case "checkBox3": return setBusinessStatus("휴업")
    //       default : return setBusinessStatus(); 
    //     }
        
    //   }
    // }
   
    const handelModify = e => {
      const UserJson = {
        userId: userId,
        password: password,
        name: name,
        email: email,
        phone: phone,
        birthday: birthday
      }
      console.log(UserJson)
      Axios
        .patch(`http://localhost:8080/user/modify/{userId}`, UserJson)
        .then(response => {
          alert("병원 데이터 변경 성공")
          setClose(false);
          history.push("/admin")
          history.push("/admin/users")

        })
        .catch(
          error => {
            alert("유저 데이터 변경 실패")
            throw(error)
          }  
        )
    }
    return (
      
      <Card
        className={clsx(classes.root, className)}
      >
        <form
          autoComplete="off"
          noValidate
        >
          <CardHeader
            title={<h3>{UserData.name}</h3>}
            space={3}
             />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={2}
            >
              
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  defaultValue={UserData.userId}
                  disabled 
                  label="유저 ID"
                  margin="dense"
                  name="userId"
                  onChange={e => setUserId(e.target.value)}
                  required
                  value={values.userId}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  defaultValue={UserData.password}
                  label="비밀번호"
                  margin="dense"
                  type="password"
                  name="password"
                  onChange={e => setPassword(e.target.value)}
                  required
                  value={values.password}
                  variant="outlined"
                />
              </Grid>
              {/* <Grid
                item
                md={12}
                xs={12}
              >
                  <FormGroup row>
                    <Box 
                      marginRight="Auto"
                      width="100px"
                      name="businessStatus"
                      className={classes.boxCss}
                      margin-right="10px">{"영업상태"}</Box>
                    <FormControlLabel
                      control={ 
                        <Checkbox
                          checked={checked.checkBox1}
                          onChange={handleCheckBox}
                          name="checkBox1"
                          />}
                          label="영업"
                      />
                    <FormControlLabel
                    control={ 
                      <Checkbox
                        defaultChecked
                        checked={checked.checkBox2}
                        onChange={handleCheckBox}
                        name="checkBox2"
                        />}
                        label="폐업"
                      />
                      <FormControlLabel
                      control={ 
                        <Checkbox
                          defaultChecked
                          checked={checked.checkBox3}
                          onChange={handleCheckBox}
                          name="checkBox3"
                          />}
                          label="휴업"
                        />
                    </FormGroup>
                </Grid> */}
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  defaultValue={UserData.name}
                  label="이름"
                  margin="dense"
                  name="name"
                  onChange={e => setName(e.target.value)}
                  required
                  value={values.name}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  defaultValue={UserData.email}
                  label="이메일"
                  margin="dense"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  required
                  value={values.email}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  defaultValue={UserData.phone}
                  label="연락처"
                  margin="dense"
                  name="phone"
                  onChange={e => setPhone(e.target.value)}
                  required
                  value={values.phone}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
              >
                <TextField
                  fullWidth
                  defaultValue={UserData.birthday}
                  label="생년월일"
                  margin="dense"
                  name="birthday"
                  onChange={e => setBirthday(e.target.value)}
                  required
                  value={values.birthday}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
          <Button onClick={e => {handelModify()}}
              color="primary"
              variant="contained"
            >
              변경된 정보 저장
            </Button>
            <Button onClick={e => {handleClose()}}
              variant="contained" 
              color="secondary"
            >
              취소
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  };
  
  UserTestBody.propTypes = {
    className: PropTypes.string
  };
  
  export default UserTestBody;