import React, { useState }  from 'react'
import { Link } from 'react-router-dom'

import './App.css'

let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Q0QGdtYWlsLmNvbSIsIl9pZCI6IjYyOTBiOTJhMDhiYzg3ZTY5NDA2Y2QyMiIsImlhdCI6MTY1MzY1MTc1NCwiZXhwIjoxNjUzNzM4MTU0fQ.9aVmT7E2eTQoACvPusr7TwzUabLyyF2Xt9rYV7TfT9w"
const headers = {
  'Accept': 'Application/json',
  'Authorization': token
}

export default function SignInPage() {
   
    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
