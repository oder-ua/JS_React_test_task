import React, { Component } from 'react';
import { Layout } from 'antd';
import { Col } from 'antd';
import { Form, Input, /*Icon,*/ Button, Radio, Select, Checkbox } from 'antd';
import TextArea from 'antd/lib/input/TextArea';//textarea should be import SEPARATED
import { connect } from 'react-redux';
import * as formActions from '../actions/formAcions.js';
import '../App.css';
import ReactModal from 'react-modal';

import { Redirect } from 'react-router';

const {Content } = Layout;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

const options = [
  { label: 'Генрих Завоеватель', value: 'Генрих Завоеватель' },
  { label: 'Сципион Африканский', value: 'Сципион Африканский' },
  { label: 'Оттон Первый', value: 'Оттон Первый' },
  { label: 'Боудика', value: 'Боудика' },
  { label: 'Цинь Шихуанди', value: 'Цинь Шихуанди' },
];

ReactModal.setAppElement('#root');

class myContent extends Component{

  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
    handleOpenModal () {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
      this.setState({ showModal: false });
    }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => { 
        if (!err) {
          this.props.saveData(values);
          this.props.form.resetFields();
          this.setState({redirect: true});
        }
      });
    };

    handleConfirm = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if(!err) {
          if(
              (values.answer1 === null) || 
              (values.answer2 === null) || 
              (values.answer3 === null) || 
              (values.answer4 === null) || 
              (values.answer5 === null)
            ) {
            console.log("MISSED")  ;
            this.handleOpenModal();
          } else {
            this.handleSubmit(e);
          }//faster then for-in
        }
      });
    };

    handleReset = (e) => {
      e.preventDefault();
      this.props.form.resetFields();
    }

    render(){
    const { getFieldDecorator } = this.props.form;

    if (this.state.redirect) {
      return <Redirect push to="/data" />;
    }

    return (
    
      <Content className="bgImage" style={{ padding: '50px 50px 50px 50px', minHeight: '280px' }}>
        <Col span={12} offset={6}>
          <Form
          className="login-form" 
          style={{backgroundColor: '#ABA8A8', padding: '35px 35px 5px 35px'}}>
            <FormItem label="Первый премьер-министр Англии:">
              {getFieldDecorator(/*'username'*/'answer1', {
                initialValue: null,
              })(
                <Input placeholder=""/>
              )}
            </FormItem>
            <FormItem label="Кто разбил Непобедимую Армаду?">
              {getFieldDecorator(/*'surname'*/'answer2', {
                initialValue: null,
              })(
                <Select>
                  <Option value="Горацио Нельсон">Горацио Нельсон</Option>
                  <Option value="Френсис Дрейк">Френсис Дрейк</Option>
                  <Option value="Полковник Буря" disabled>Полковник Буря</Option>
                  <Option value="Генри Морган">Генри Морган</Option>
                </Select>
              )}
            </FormItem>
            <FormItem label="Дракар являлся кораблём...">
              {getFieldDecorator(/*'email'*/'answer3',{
                initialValue: null,
              })(
                <RadioGroup>
                  <Radio value={1} disabled>Пришельцев</Radio>
                  <Radio value={2}>Византийцев</Radio>
                  <Radio value={3}>Варягов</Radio>
                  <Radio value={4}>Франков</Radio>
                  <Radio value={5}>Саксов</Radio>
                  <Radio value={6}>Китайцев</Radio>
                </RadioGroup>
              )}
              </FormItem>
              <FormItem label="Эти полководцы были также правителями своих земель:">
              {getFieldDecorator(/*'email'*/'answer4',{
                initialValue: null,
              })(
                <CheckboxGroup options={options}/>//порядок выбора имеет значение!
              )}
              </FormItem>
              <FormItem label="Государства-предшественники Франции:">
              {getFieldDecorator(/*'response'*/'answer5', {
                initialValue: null
              })(
                <TextArea 
                  style={{color: 'rgba(0,0,0,.25)'}} 
                  placeholder="" 
                  autosize={{minRows: 3, maxRows: 7}}
                />
              )}
              </FormItem>
              <FormItem>
                <Button type="primary" 
                  onClick={this.handleConfirm} 
                  htmlType="submit"
                  className="login-form-button"
                >Ответить</Button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
                  className="Modal"
                >
                  <div>
                    <p>
                      <font color="yellow" >
                      <i>
                      Каждый неотвеченный ответ считается неправильным, Вы уверены что хотите продолжить?
                      </i>
                      </font>
                    </p>
                  </div>
                  <div>
                    <Button 
                      type="primary" 
                      htmlType="submit"
                      onClick={this.handleSubmit}
                    >Да</Button>
                    <Button 
                      type="danger" 
                      htmlType="reset" 
                      style={{float: "right"}} 
                      onClick={this.handleCloseModal}
                    >Нет</Button>
                  </div>
                </ReactModal>
                <Button 
                  type="danger" 
                  htmlType='reset' 
                  className="login-cancel-button" 
                  style={{float: "right"}}
                  onClick={this.handleReset}
                >Очистить форму</Button>
              </FormItem>
          </Form>
        </Col>
      </Content>
      
    );
  }
}

const WrappedContent = Form.create()(myContent);
const initMapStateToProps = (state) => ({
  data: state.dataload,
});

const initMapDispatchToProps = (dispatch) => ({
  saveData: data => dispatch(formActions.saveData(data)),
});
const connection = connect(initMapStateToProps,initMapDispatchToProps)(WrappedContent);
export default connection;