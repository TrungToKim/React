import React from 'react'

class ResetPassword extends React.Component {

    state = {
        email: '',
    }

    handleReset = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmitReset = (event) => {
        event.preventDefault()
        alert('Success')
    }

    render() {
        let { email } = this.state
        return (
            <>
                <form action="">
                    <h1>Simple ResetPassword</h1>
                    <div>
                        <span>
                            <label htmlFor="">Reset Password</label> <br />
                            <input
                                className='ResetPassword'
                                type="email"
                                onChange={(event) => this.handleReset(event)}
                            /> <br />

                            <button
                                className='Submit-reset'
                                onClick={(event) => this.handleSubmitReset(event)}
                            >
                                Submit
                            </button>
                        </span>
                    </div>
                </form>
            </>
        )
    }
}

export default ResetPassword