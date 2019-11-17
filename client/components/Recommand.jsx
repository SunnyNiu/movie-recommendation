import React from 'react'
import { connect } from 'react-redux'

class Recommand extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    const genres = this.props.genres
    let arr = Object.values(genres)
    let max = Math.max(...arr)
    console.log('max', max)

    const genresArray = []
    for (let [key, value] of Object.entries(genres)) {
      if (genres[key] === max) genresArray.push(key)
    }

    return (<div className="container">
      <div className="notification">
        <p>Welcome!!</p>
      </div>
      )
    </div>)
  }
}

function mapStateToProps (state) {
  return {
    genres: state.genres
  }
}
const mapDispatchToProps = dispatch => ({
  // fetchMovie: () => dispatch(fetchMovie()),
  // getGenresMovie
})

export default connect(mapStateToProps, mapDispatchToProps)(Recommand)
