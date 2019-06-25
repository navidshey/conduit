import ArticleList from '../ArticleList';
import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

class MainView extends React.Component {

  constructor(props){
    super(props)
    this.state={
      loading: false
    }
  } 

  componentDidMount() {
  };

  render(){
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        {/* <ul className="nav nav-pills outline-active">
  
            <YourFeedTab
              token={props.token}
              tab={props.tab}
              onTabClick={props.onTabClick} />
  
            <GlobalFeedTab tab={props.tab} onTabClick={props.onTabClick} />
  
            <TagFilterTab tag={props.tag} />
  
          </ul> */}
      </div>
      <ArticleList
        articles={this.props.articles}
        loading={this.state.loading} />
    </div>
  );
        }
};

MainView.propTypes = {
  articles: propTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

export default connect(mapStateToProps)(MainView);