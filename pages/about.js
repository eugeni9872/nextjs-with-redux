import { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { getPosts } from '../http/requests';
import { savePosts } from '../actions/PostActions';

class About extends Component {

    static async getInitialProps({ reduxStore })  {
        const posts = await getPosts();
        await reduxStore.dispatch(savePosts(reduxStore.dispatch, posts))
        return {}
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.router.push("/")
    }
    render() {
      
        return(
            <a href={"/"} onClick={this.handleClick} >
            Nose
      </a>
        )
    }
}

export default  connect()(withRouter(About));