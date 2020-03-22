import React, { Component } from 'react'
import {Link} from 'gatsby'
import "../style/error-page.scss"
import Head from '../components/head'

export class NotFound extends Component {
    render() {
        return (
            <div className="error-page container">
                <Head title="404 | Sumit Pal" />
                <h1>404</h1>
                <span>Page Not Found</span>
                <span><Link className="btn btn-primary__orange" to="/">Homepage</Link></span>
            </div>
        )
    }
}

export default NotFound
