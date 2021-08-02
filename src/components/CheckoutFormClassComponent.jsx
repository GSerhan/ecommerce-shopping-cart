import React, {Component} from 'react';

class CheckoutForm extends Component {


    render() {
        const formData = this.props.formData;
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" value={formData.email} onChange={this.props.formChange}/>
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name"  className="form-control" placeholder="Enter name" value={formData.name} onChange={this.props.formChange}/>
                    </div>
                    <div className="form-group">
                        <label>Adress</label>
                        <input type="text" name="adress" className="form-control" placeholder="Enter adress" value={formData.adress} onChange={this.props.formChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.props.submitData}>Submit</button>
                </form>
            </div>
        )
    }
}

export default CheckoutForm