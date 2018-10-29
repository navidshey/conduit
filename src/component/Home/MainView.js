import ArticleList from '../ArticleList';
import React from 'react';

class MainView extends React.Component {

  constructor(props){
    super(props)
    this.state={
      articles:[],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://conduit.productionready.io/api/articles?limit=10&offset=0')
      .then(response => response.json())
      .then(json => json.results)
      .then(articles => this.setState({
        articles,
        loading: false
      }))
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
        articles={this.state.articles}
        loading={this.state.loading} />
    </div>
  );
        }
};

export default MainView;