import { Component } from 'react';
import { connect } from 'react-redux'
import Link from 'next/link';
class About extends Component {

    static async getInitialProps({ reduxStore })  {

        //Here we can dispatch some acction
        //await reduxStore.dispatch({type: 'ADD_POST', payload:data})
        return {}
    }



    render() {
      
        return(
            <div>
                 <h2>Welcome to About Page!!!</h2>

                <Link href="/users">
                <a>Users </a>
                </Link>


                <Link href="/">
                    <a>Index</a>
                </Link>
            </div>
        )
    }
}

export default  connect()(About);