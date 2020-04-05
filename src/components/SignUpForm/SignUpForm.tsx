import React, { useState, Dispatch, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { UserActions } from '../../redux/actions/userActions';
import firebase, { db } from '../../config/firebase';
import Styled from './styles';
import { User } from '../../redux/reducers/userReducer';

const SignUpForm = () => {

    const [ form, setForm ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        birthday: {
            month: '',
            day: '',
            year: '',
        },
        gender: '',
    });
    
    const userDispatch = useDispatch<Dispatch<UserActions>>()
    
    const handleSignUp = () => {
        firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
        .then(result => {
            if (result.user) {
                const user: User = {
                    uid: result.user.uid,
                    email: result.user.email,
                }
                return user
            } else {
                throw new Error('Firebase did not return a user object')
            }
        })
        .then(user => {
            db.collection('users').doc(user.uid).set({
                uid: user.uid,
                email: user.email,
                firstName: form.firstName,
                lastName: form.lastName,
                birthday: form.birthday,
                gender: form.gender,
            })
            .then(

            )
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleChange = (e: ChangeEvent<any>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleChangeBirthday = (e: ChangeEvent<any>) => {
        const birthday = {
            ...form.birthday,
            [e.target.name]: e.target.value,
        }

        setForm({
            ...form,
            birthday,
        })
    }

    return (
        <Styled.SignUpForm>
            <h1>Create a New Account</h1>
            <p>It's quick and easy!</p>
            <Styled.Row>
                <input type="text" onChange={handleChange} name="firstName" placeholder="First Name"/>
                <input type="text" onChange={handleChange} name="lastName" placeholder="Last Name"/>
            </Styled.Row>
            <Styled.Row>
                <input type="text" onChange={handleChange} name="email" placeholder="Email"/>
            </Styled.Row>
            <Styled.Row>
                <input type="password" onChange={handleChange} name="password" placeholder="New password"/>
            </Styled.Row>
            Birthday
            <div>
                <select onChange={handleChangeBirthday} name="month" id="month">
                  <option value="Month">Month</option>
                  <option value="January">Jan</option>
                  <option value="February">Feb</option>
                  <option value="March">Mar</option>
                  <option value="April">Apr</option>
                  <option value="May">May</option>
                  <option value="June">Jun</option>
                  <option value="July">Jul</option>
                  <option value="August">Aug</option>
                  <option value="September">Sep</option>
                  <option value="October">Oct</option>
                  <option value="November">Nov</option>
                  <option value="December">Dec</option>
                </select>
                <select onChange={handleChangeBirthday} name="day" id="day">
                    <option value="Day">Day</option>
                    {Array(31).fill('filler').map((n, idx) => 
                        <option key={`day ${idx + 1}`} value={idx + 1}>{idx +1}</option>
                    )}
                </select>
                <select onChange={handleChangeBirthday} name="year" id="year">
                    <option value="year">Year</option>
                    {Array(120).fill('filler').map((n, idx) => {
                        const year = new Date().getFullYear() - idx
                        return <option key={`year ${year}`}value={year}>{year}</option>
                    }
                    )}
                </select>
            </div>
            Gender
            <div>
                <input type="radio" onChange={handleChange} name="gender" value="female" checked={form.gender === 'female'}/>Female 
                <input type="radio" onChange={handleChange} name="gender" value="male" checked={form.gender === 'male'}/>Male
                <input type="radio" onChange={handleChange} name="gender" value="custom" checked={form.gender === 'custom'}/>Custom
            </div>

            <button onClick={handleSignUp}>Sign Up</button>
        </Styled.SignUpForm>
    )
}

export default SignUpForm
