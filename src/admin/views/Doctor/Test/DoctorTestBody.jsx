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

const DoctorTestBody = (props) => {
    const classes = useStyles();
    const {doctorData, setClose, className} = props
    // const {doctorData} = props    
    const [doctorNo, setDoctorNo] = useState(doctorData.doctorNo)
    const [doctorName, setDoctorName] = useState(doctorData.doctorName)
    const [doctorsLicense, setDoctorsLicense] = useState(doctorData.doctorsLicense)
    const [hospitalName, setHospitalName] = useState(doctorData.hospitalName);
    const [position, setPosition] = useState(doctorData.position)
    const [detailData, setDetailData] = useState(doctorData.detailData)
    const [specialized, setSpecialized] = useState(doctorData.specialized)
    const [medicalSubject, setMedicalSubject] = useState(doctorData.medicalSubject)
    const [birthday, setBirthday] = useState(doctorData.birthday)

    // const [close, setClose]= useState()
    const [values, setValues] = useState([]);
    
    const [checked, setChecked] = useState({
      checkBox1 : false,
      checkBox2 : false,
      checkBox3 : false,
    })

    const history = useHistory();

    // useEffect(()=>{
    //   switch(doctorData.businessStatus){
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
      const doctorJson = {
        doctorNo : doctorNo,
        doctorName: doctorName,
        doctorsLicense: doctorsLicense,
        hospitalName: hospitalName,
        position : position,
        detailData : detailData,
        specialized : specialized,
        medicalSubject : medicalSubject,
        birthday : birthday
      }
      console.log(doctorJson)
      Axios
        .patch(`http://localhost:8080/doctor/modify/${doctorsLicense}`, doctorJson)
        .then(response => {
          alert("병원 데이터 변경 성공")
          setClose(false);
          
          // history.push("/admin")
          history.push("/admin/doctor")

        })
        .catch(
          error => {
            alert("병원 데이터 변경 실패")
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
            title={<h3>{doctorData.doctorName}</h3>}
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
                  defaultValue={doctorData.doctorsLicense}
                  disabled 
                  label="의사 면허 번호"
                  margin="dense"
                  name="doctorsLicense"
                  onChange={e => setDoctorsLicense(e.target.value)}
                  required
                  value={values.doctorsLicense}
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
                  defaultValue={doctorData.hospitalName}
                  label="소속 병원"
                  margin="dense"
                  name="hospitalName"
                  onChange={e => setHospitalName(e.target.value)}
                  required
                  value={values.hospitalName}
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
                  defaultValue={doctorData.position}
                  label="직책"
                  margin="dense"
                  name="position"
                  onChange={e => setPosition(e.target.value)}
                  required
                  value={values.position}
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
                  defaultValue={doctorData.detailData}
                  label="상세정보"
                  margin="dense"
                  name="detailData"
                  onChange={e => setDetailData(e.target.value)}
                  required
                  value={values.detailData}
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
                  defaultValue={doctorData.specialized}
                  label="전문분야"
                  margin="dense"
                  name="specialized"
                  onChange={e => setSpecialized(e.target.value)}
                  required
                  value={values.specialized}
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
                  defaultValue={doctorData.medicalSubject}
                  label="진료과목"
                  margin="dense"
                  name="medicalSubject"
                  onChange={e => setMedicalSubject(e.target.value)}
                  required
                  value={values.medicalSubject}
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
                  defaultValue={doctorData.birthday}
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
  
  DoctorTestBody.propTypes = {
    className: PropTypes.string
  };
  
  export default DoctorTestBody;