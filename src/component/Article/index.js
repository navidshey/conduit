import React from 'react';
import ArticleMeta from './ArticleMeta';
// import marked from 'react-marked';

class Article extends React.Component{

    constructor(props){
        super(props)
        this.state={
          article:[]
        }
      } 

    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://conduit.productionready.io/api/articles/'+this.props.match.params.id)
          .then(response => response.json())
          .then(json => json.article)
          .then(article => 
            this.setState({
            article
          })
          )
      }; 

    render() {  
        if (!this.state.article.author) {
          return null;
        }
    

        // const markup = { __html: marked(this.state.article.body, { sanitize: true }) };
        const canModify = this.state.currentUser &&
          this.state.currentUser.username === this.state.article.author.username;
        return (
          <div className="article-page">
    
            <div className="banner">
              <div className="container">
    
                <h1>{this.state.article.title}</h1>
                <ArticleMeta
                  article={this.state.article}
                  canModify={canModify} />
              </div>
            </div>
    
            <div className="container page">
    
              <div className="row article-content">
                <div className="col-xs-12">
    
                  {/* <div dangerouslySetInnerHTML={markup}></div> */}
    
                  <ul className="tag-list">
                    {
                      this.state.article.tagList.map(tag => {
                        return (
                          <li
                            className="tag-default tag-pill tag-outline"
                            key={tag}>
                            {tag}
                          </li>
                        );
                      })
                    }
                  </ul>
    
                </div>
              </div>
    
              <hr />
    
              <div className="article-actions">
                {this.state.article.body}
              </div>
    
              {/* <div className="row">
                <CommentContainer
                  comments={this.state.comments || []}
                  errors={this.state.commentErrors}
                  slug={this.state.match.params.id}
                  currentUser={this.state.currentUser} />
              </div> */}
            </div>
          </div>
        );
      }
}

export default Article;  