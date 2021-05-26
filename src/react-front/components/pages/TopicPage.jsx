import React, { Component } from 'react';

import TopicPresContainer from '../micro-components/TopicPresContainer';
import TopicArticleGrid from '../micro-components/TopicArticleGrid';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TopicPage extends Component {

  constructor(props) {
    super(props)
    //alert(props.user);
  }

  render() {
    return(
        <div>
            <TopicPresContainer/>
            <TopicArticleGrid goToPreview={this.props.goToPreview}/>
        </div>
    )
  }
}