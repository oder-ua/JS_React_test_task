import { connect } from 'react-redux';
import React, { Component } from 'react';

class myCalculator extends Component{
  
  render(){

    let counter = 0;
    console.log(this.props.data.data.answer4);
    if((this.props.data.data.answer1 === "Оливер Кромвель") || 
    (this.props.data.data.answer1 === "О. Кромвель") || 
    (this.props.data.data.answer1 === "Кромвель")){
      counter+=3;
    }
    if(this.props.data.data.answer2 === "Френсис Дрейк"){
      counter++;
    }
    if(this.props.data.data.answer3 === 3){
      counter++;
    }
    //специальный рассчет для чекбоксов
    if(this.props.data.data.answer4 !== null)
    {
      let chkbx = Array(this.props.data.data.answer4);
      if(chkbx[0].includes("Генрих Завоеватель")){
        counter++;
      }
      if(chkbx[0].includes("Оттон Первый")){
        counter++;
      }
      if(chkbx[0].includes("Цинь Шихуанди")){
        counter++;
      }
    }
    //специальный рассчет для textarea
    {
      let str = String(this.props.data.data.answer5);
      var breaker1 = 1;
      var breaker2 = 1;
      var tmp = str.split(/,|\n/);
      for(let word in tmp){
        tmp[word] = tmp[word].trim();
        }
      for(let x in tmp){
        if((tmp[x] === "Галлия") && (breaker1 !== 0)){
          counter++;
          breaker1--;
        } else if(((tmp[x] === "Империя Франков") || (tmp[x] === "Королевство Франков")) && 
        (breaker2 !== 0)){
          counter++;
          breaker2--;
        }
      }
    }

    return(
      <div style={{textAlign: 'center', background: 'inherit'}}>
        <p>Ваша оценка: {counter} из 10
        </p>
      </div>
    )
  }

}

const initMapStateToProps = (state) => ({
    data: state.dataload,
  });
  
export default connect(initMapStateToProps,undefined)(myCalculator);