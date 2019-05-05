import React from 'react';
import Banner from '../Banner'
import MainView from './MainView'
import Tags from './Tags'

class Home extends React.Component {

    constructor(props){
        super(props);
        if(!props){
            props.appName ="Save note";
        }
    }

    render() {
        return (
            <div className="home-page">
                <Banner token={this.props.token} appName={this.props.appName} ></Banner>
                <div className="container page">
                    <div className="row">
                        <MainView />

                        <div className="col-md-3">
                            <div className="sidebar">

                                <p>Popular Tags</p>
                                <Tags tags={this.props.tags}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;