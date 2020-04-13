import React, {Component} from 'react';

class AddVhs extends Component {
    state = {
        formData: {
            title: '',
            director: '',
            releaseYear: ''
        }
    }

    render() {
        return (
            <>
            <h1>This is the add page component</h1>
            <p>located src/components/AddVhs/AddVhs.jsx</p>
            </>
        )
    }
}

export default AddVhs;