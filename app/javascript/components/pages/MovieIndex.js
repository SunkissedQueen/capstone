import React, { Component } from 'react'
import { Card, CardTitle, Col } from 'reactstrap'

class TitleIndex extends Component {
  render() {
    return(
        <>
      <h3>This is the Page that will show after the Search on the Home page</h3>
      <h3>Checkout the movies!</h3>
<br />
  <Col sm="6">
    {this.props.movies.map(movie => {
      return (
        <Card body key={movie.id}>
          <CardTitle>
            <h4>{movie.name}</h4>
          </CardTitle>
        </Card>
      )
    })}
  </Col>
  </>
    )
  }
}

export default TitleIndex