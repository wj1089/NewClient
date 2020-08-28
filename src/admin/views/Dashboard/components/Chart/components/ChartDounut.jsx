import React, {useState, useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';
import data from '../../../../Doctor/data';
import {Button} from '@material-ui/core'

const ChartSize = {
    height : '50px'
  }



const DoughnutChart = props => {
  console.log("차트에 왔니?")
  const [chart, setChart] = useState({})
  const {chartValue, data} = props


  const ageData = props => ({
    labels: [
      '10대', '20대', '30대', '40대', '50대', '60대', '70대', '80대 이상'
    ],
    datasets: [{
      label: '연령별 이용자',
      data: [props.chartData, props.chartData2, props.chartData3, 81, 56, 55, 40, 34],
      backgroundColor: [
      '#ff6a6d',
      '#e28965',
      '#e7cd61',
      '#a0b8a1',
      '#63d365',
      '#0693e3',
      '#c79c9f',
      '#c78ee7'
      ],
      hoverBackgroundColor: [
      '#ff6a6d',
      '#e28965',
      '#e7cd61',
      '#a0b8a1',
      '#63d365',
      '#0693e3',
      '#c79c9f',
      '#c78ee7'
      ],
      borderWidth : 1
    }]
  })
  
  const sexData = data => ({
    labels: ['남성', '여성'],
    datasets: [{
      label: '성별 이용자',
      data: [55, 45],
      backgroundColor: [
      '#8bc34a',
      '#ffc107'
      ],
      hoverBackgroundColor: [
      '#8bc34a',
      '#ffc107'
      ],
      borderWidth : 1
    }]
  });
  
  const locationData = {
    labels: ['서울시 금천구', '서울시 광진구', '서울시 종로구', '서울시 마포구', '서울시 용산구'],
    datasets: [{
      label: '지역별 이용자',
      data: [72,56,33,21,11],
      backgroundColor: [
        '#ff6a6d',
        '#e28965',
        '#e7cd61',
        '#a0b8a1',
        '#63d365'
      ],
      hoverBackgroundColor: [
        '#ff6a6d',
        '#e28965',
        '#e7cd61',
        '#a0b8a1',
        '#63d365'
      ],
      borderWidth : 1
    }]
  };
  

  const daysData = {
    labels: [
      '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월','10월','11월','12월'
    ],
    datasets: [{
      label: '월별 이용자',
      data: [65, 59, 80, 81, 56, 55, 40, 34, 21, 55, 78, 95],
      backgroundColor: [
        '#ff6a6d',
        '#e28965',
        '#e7cd61',
        '#a0b8a1',
        '#63d365',
        '#0693e3',
        '#c79c9f',
        '#c78ee7',
        '#9a72e3',
        '#8dce8d',
        '#8dc2ce',
        '#b1c5c9'
      ],
      hoverBackgroundColor: [
        '#ff6a6d',
        '#e28965',
        '#e7cd61',
        '#a0b8a1',
        '#63d365',
        '#0693e3',
        '#c79c9f',
        '#c78ee7',
        '#9a72e3',
        '#8dce8d',
        '#8dc2ce',
        '#b1c5c9'
      ],
      borderWidth : 1
    }]
  };



    

  useEffect(()=>{
    console.log("useEffect")
    
    console.log(chartValue)
    setChart({
      labels: [
        '10대', '20대', '30대', '40대', '50대', '60대', '70대', '80대 이상'
      ],
      datasets: [{
        label: '연령별 이용자',
        data: [props.chartData, props.chartData2, props.chartData3, 81, 56, 55, 40, 34],
        backgroundColor: [
        '#ff6a6d',
        '#e28965',
        '#e7cd61',
        '#a0b8a1',
        '#63d365',
        '#0693e3',
        '#c79c9f',
        '#c78ee7'
        ],
        hoverBackgroundColor: [
        '#ff6a6d',
        '#e28965',
        '#e7cd61',
        '#a0b8a1',
        '#63d365',
        '#0693e3',
        '#c79c9f',
        '#c78ee7'
        ],
        borderWidth : 1
      }]
    })
    

  
    const switchCase = (param) =>{
      switch(param){
        case "Age": return setChart(ageData(props)) 
        case "Sex": return setChart(sexData) 
        case "Days": return setChart(daysData)
        case "Location": return setChart(locationData)
          }
        }
    switchCase(chartValue, props)
  },[chartValue])

  
    if(chartValue) {
      return (
      <div>
        <h2>{chart.title}</h2>
        <Doughnut 
          className={ChartSize}
          data={chart}
        />
      </div>) 
      }else{
      return (
        <div>
          <h2>{chart.title}</h2>
          <Doughnut 
          className={ChartSize}
            data={ageData}
          />
        </div>)
      }
    }

  export default DoughnutChart