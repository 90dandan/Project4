import React, {Component} from 'react';


class AddVhsPage extends Component {
    state = {
        formData: {
            title: '',
            director: '',
            releaseYear: ''
        }
    }

    formRef = React.createRef();

    handleChange = e => {
        const formData = {...this.state.formData, [e.target.name]:e.target.value}
        this.setState({
            formData,
            invalidForm: !this.formRef.current.checkValidity()
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.handleAddVhs(this.state.formData)
    }


    render() {
        return (
            <>
                <h1>Add Vhs</h1>
                <form ref={this.formRef} autoComplete='off' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Vhs Title:</label>
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
                            value={this.state.formData.breed}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Release Year:</label>
                        <input
                            className='form-control'
                            name='releaseYear'
                            value={this.state.formData.age}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type='submit'
                        className='btn'
                        onChange={this.handleChange}
                    >
                        ADD VHS
                    </button>
                </form>
            </>
        )
    }
}

export default AddVhsPage;

{/* <form onSubmit={this.handleSubmit}
            className='form'>
                <span>Add Vhs:</span>
                <input
                    name='title'
                    value={this.state.formData.task}
                    onChange={this.handleChange}
                />
                <span>Director:</span>
                <input
                    name='director'
                    value={this.state.formData.task}
                    onChange={this.handleChange}
                />
                <span>Year Released:</span>
                <input
                    name='releaseYear'
                    value={this.state.formData.task}
                    onChange={this.handleChange}
                />
                <input 
                    type='submit'
                    value='Add Vhs' 
                    className='btn'
                />
            </form> */}