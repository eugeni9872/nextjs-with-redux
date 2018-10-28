import { Component } from 'react';
import { connect } from 'react-redux';
import { saveUsers } from '../actions/PostActions';
import { getUsers } from '../http/requests';
import Link from 'next/link';

class Users extends Component {

    static async getInitialProps({ reduxStore })  {

        const users = await getUsers();
        await reduxStore.dispatch(saveUsers(users))
        
        return {someProps: ["here", "we", "can", "return", "some", "data", "from", "server"]}

    }

    render() {
        
        return(
            <div>
        <Link href="/">
          <a>
            Index
          </a>
        </Link>
                <div>   
                    <h2>Server:</h2>
                    <p>
                        {this.props.someProps.map((prop, indx)=>(
                            <span key={indx}>{prop} </span>
                        ))}
                    </p>
                </div>
                

                <h2>Redux:  </h2>
                <div>

                    {this.props.users.map((user,indx) => (
                        <div key={indx}>
                            <h4>Username : {user.name}</h4>
                            <button onClick={() => this.props.sayHi(user.name)}>Say Hi</button>
                        </div>
                    ))}
                </div>

            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        sayHi : (name ) => {
            alert(`User ${name} said hi`)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);