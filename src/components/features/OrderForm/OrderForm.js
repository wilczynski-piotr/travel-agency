import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import PropTypes from 'prop-types';

const OrderForm =(props) => (

  <Row>
    <Col xs={12}>
      <OrderSummary cost={props.tripCost} options={props.options}/>
    </Col>
  </Row>

);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};


export default OrderForm;
