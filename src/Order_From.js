import React from 'react';

function Order_Form(props){

    const Name = props.name;

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    return (
        <form>
            <input
            placeholder="이름"
            value={props.name}
            onChange={props.handleChange}
            />
            <div>{props.name}</div>
        </form>
    )

}

export default Order_Form;