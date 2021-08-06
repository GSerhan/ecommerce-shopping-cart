import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCheckoutData } from '../actions/orderActions';

const CheckoutForm = props => {

    const dispatch = useDispatch();
   
    const [formData, setFormData] = useState({
        formData: {
            email: '',
            name: '',
            adress: '',
        }
    });

    const updateForm = event => {
        setFormData(prevState => ({
            formData: {
                ...prevState.formData,
                [event.target.name]: event.target.value
            }
        }));
    }

    const sendFormData = (event) => {
        event.preventDefault()
        dispatch(updateCheckoutData(formData));
        props.showOrderMethod();
    }
    return (
        <div>
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" value={formData.email} onChange={event => updateForm(event)}/>
                    <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name"  className="form-control" placeholder="Enter name" value={formData.name} onChange={event => updateForm(event)}/>
                </div>
                <div className="form-group">
                    <label>Adress</label>
                    <input type="text" name="adress" className="form-control" placeholder="Enter adress" value={formData.adress} onChange={event => updateForm(event)}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={(e) => sendFormData(e)}>Submit</button>
            </form>
        </div>
    )
    
}

export default CheckoutForm