import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderSummary = (props) => (
  <h2 className={styles.component}>Total <strong>$ {calculateTotal(formatPrice(props.cost), props.options).toFixed(2)}</strong></h2>
);

OrderSummary.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;
