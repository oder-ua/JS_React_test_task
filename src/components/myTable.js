import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import '../App.css';

class myTable extends Component{

  render(){

    const columns = [
      {
        key: 'rightAnswers',
        title: 'Правильные ответы',
        dataIndex: 'rightAnswers',
      }, 
      {
        key: 'yourAnswers',
        title: 'Ваши ответы',
        dataIndex: 'yourAnswers',
      },
    ]

    return(
      <div className="bgImage">
        <Table 
          style={{
            width: '60%', 
            margin: '40px 20% 40px 20%',
          }}
          columns={columns}
          pagination={false}
          dataSource={
            [
              {
                key: '1',
                rightAnswers: 'Оливер Кромвель',
                yourAnswers: (this.props.data.data.answer1 === null)?("Вы не ответили"):(this.props.data.data.answer1),
              }, {
                key: '2',
                rightAnswers: 'Френсис Дрейк',
                yourAnswers: (this.props.data.data.answer2 === null)?("Вы не ответили"):(this.props.data.data.answer2),
              }, {
                key: '3',
                rightAnswers: '3',
                yourAnswers: (this.props.data.data.answer3 === null)?("Вы не ответили"):(this.props.data.data.answer3),
              }, {
                key: '4',
                rightAnswers: 'Генрих Завоеватель, Оттон Первый, Цинь Шихуанди',
                yourAnswers: (this.props.data.data.answer4 == null)?("Вы не ответили"):(Array(this.props.data.data.answer4).join(',')),
              }, {
                key: '5',
                rightAnswers: 'Галлия, Империя Франков',
                yourAnswers: (this.props.data.data.answer5 == null)?("Вы не ответили"):(this.props.data.data.answer5),
              }
            ]
          }
          rowClassName="Rows"         
        />
      </div>
    )
  }
}

const initMapStateToProps = (state) => ({
  data: state.dataload,
});

export default connect(initMapStateToProps,undefined)(myTable);