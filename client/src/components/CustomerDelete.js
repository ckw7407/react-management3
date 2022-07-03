import React, { Component } from 'react';

class CustomerDelete extends Component {

    deleteCustomer(id){
        // /api/customers/7
        const url = 'api/customers/' + id;
        fetch(url,{
            method:'DELETE'
        });
        //alert('deleteCustomer');
        this.props.stateRefresh();
        this.props.stateRefresh();
    }

    render() {
      return (
        <button onClick={(e) => {this.deleteCustomer(this.props.id)}}>삭제</button>
      );
    }
}

export default CustomerDelete;