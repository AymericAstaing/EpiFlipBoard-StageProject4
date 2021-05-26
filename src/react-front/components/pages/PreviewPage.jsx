import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PreviewContainer from '../micro-components/PreviewContainer';
import RelatedToPreviewGrid from '../micro-components/RelatedToPreviewGrid';

export default class PreviewPage extends Component {

  render() {
    return(
        <div>
            <PreviewContainer/>
            <RelatedToPreviewGrid/>
        </div>
    )
  }
}