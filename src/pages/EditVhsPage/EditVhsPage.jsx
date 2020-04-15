import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';

class EditVhsPage extends Component {
    state ={
        invalidForm: false,
        formData: this.props.location.state.vhs
    }
    

    formRef = React.createRef();

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleUpdateVhs(this.state.formData)
    }

    handleChange = e => {
        const formData = {... this.state.formData, [e.target.name]: e.target.value};
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
                    <label>Title: (required)</label>
                    <input
                        className='form-control'
                        name='title'
                        value={this.handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>Director: (required)</label>
                    <input
                        className='form-control'
                        name='director'
                        value={this.handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>Release Year: (required)</label>
                    <input
                        className='form-control'
                        name='releaseYear'
                        value={this.handleChange}
                        required
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