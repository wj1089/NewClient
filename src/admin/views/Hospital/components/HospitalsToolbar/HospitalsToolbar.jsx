import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import { SearchInput } from '../../../../components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  headline: {
    marginLeft: theme.spacing(1)
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const HospitalsToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  // const [keyword, setKeyword] = useState()
  // const searchKeyword = e => {
  //   setKeyword(e.target.value)
  //   console.log(e.target.value)
  // }

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}
              style={{fontWeight:"bold", fontSize:"x-large"}}>병원 관리
        <span className={classes.spacer} />
        {/* <Button 
          className={classes.importButton}
          >
            Import
        </Button>
        <Button 
        className={classes.exportButton}
          >리스트 파일 확인
        </Button> */}
        <Link to="/admin/HospitalsAdd">
        <Button
          color="primary"
          variant="contained"
          >
          병원 등록
          </Button>
        </Link>
      </div>
      {/* 추후 도입예정
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="병원 검색"
          value={keyword}
          onChange={searchKeyword}
        />
        <Button 
          color="primary"
          variant="contained"
          onClick={searchKeyword}>
        <SearchIcon/>
        </Button>
      </div> */}
    </div>
  );
};

HospitalsToolbar.propTypes = {
  className: PropTypes.string
};

export default HospitalsToolbar;
