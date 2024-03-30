import React, { Component } from 'react'
import Error from '../Pages/Error';

export default class Errorboundary extends Component {
    state = { hasError: false };
    
    componentDidCatch(error,info){
        this.setState({ hasError: true });
    console.error(error, info);

    }
  render() {
        if (this.state.hasError) {
            return <Error />;
          }
        return this.props.children
  }
}
