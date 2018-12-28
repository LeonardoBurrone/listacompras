import React, { Component } from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const units = ['Kilos', 'Litros', 'Unidades'];

class Form extends Component {
  state = {
    list: '',
    product: '',
    quantity: '',
    unit: '',
    price: '',
    showErrors: false,
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = () => {
    const { list, product, quantity, unit, price } = this.state;
    if (!list || !product || !quantity || !unit || !price) {
      this.setState({ showErrors: true });
    } else {
      this.props.addProduct({product, quantity, unit, price}, list);
      this.setState({
        product: '',
        quantity: '',
        unit: '',
        price: '',
        showErrors: false,
      });
    }
  }

  render() {
    return (
      <form className='form-container'>
        <div className='form-row'>
          <TextField
            label="Lista"
            name='list'
            value={this.state.list}
            onChange={this.handleChange}
            required
            error={!this.state.list && this.state.showErrors}
          />
          <Button variant='outlined' color='secondary' onClick={this.handleSubmit}>Adicionar</Button>
        </div>

        <div className='form-row'>
          <TextField
            label='Produto'
            name='product'
            value={this.state.product}
            onChange={this.handleChange}
            required
            error={!this.state.product && this.state.showErrors}
          />    
          <TextField
            label='Quantidade'
            name='quantity'
            value={this.state.quantity}
            onChange={this.handleChange}
            required
            error={!this.state.quantity && this.state.showErrors}
          />    
          <TextField
            select
            label='Unidade'
            name='unit'
            value={this.state.unit}
            onChange={this.handleChange}
            required
            error={!this.state.unit && this.state.showErrors}
          >
            {units.map(unit => (
              <MenuItem key={unit} value={unit} >{unit}</MenuItem>
            ))}
          </TextField>    
          <TextField
            label='Preço'
            name='price'
            value={this.state.price}
            onChange={this.handleChange}
            InputProps={{
              startAdornment: <InputAdornment position='start'>R$</InputAdornment>
            }}
          />
        </div>
      </form>
    );
  }
}

export default Form;