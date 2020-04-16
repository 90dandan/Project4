import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import { render } from '@testing-library/react';

class EditVhsPage extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.vhs,
        idx: this.props.location.idx
    }

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateVhs(this.state.formData, this.state.idx, this.props.location.state.vhs._id);
    };

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]: e.target.value};
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    render() {
        return (
            <>
            <h1>Edit VHS</h1>
            <form ref={this.formRef} autoComplete='off' onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label>Title:</label>
                    <input
                        className='form-control'
                        name='title'
                        value={this.state.formData.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Director:</label>
                    <input
                        className='form-control'
                        name='director'
                        value={this.state.formData.director}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Release Year:</label>
                    <input
                        className='form-control'
                        name='releaseYear'
                        value={this.state.formData.releaseYear}
                        onChange={this.handleChange}
                    />
                </div>
                <button
                    type='submit'
                    className='btn btn-xs'
                    disabled={this.state.invalidForm}
                >
                    Save VHS
                </button>&nbsp;&nbsp;
                <Link to='/'>CANCEL</Link>
            </form>
            </>
        )
    }
}

export default EditVhsPage;