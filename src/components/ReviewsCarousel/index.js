import {Component} from 'react'
import './index.css'

const leftArrow = 'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
const rightArrow =
  'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'

class ReviewsCarousel extends Component {
  state = {
    id: 0,
  }

  leftClickButton = () => {
    const {id} = this.state
    if (id > 0) {
      this.setState(pervState => ({id: pervState.id - 1}))
    }
  }

  rightClickButton = () => {
    const {id} = this.state
    const {reviewsList} = this.props
    const lengthOfList = reviewsList.length

    if (id < lengthOfList - 1) {
      this.setState(pervState => ({
        id: pervState.id + 1,
      }))
    }
  }

  render() {
    const {id} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[id]

    return (
      <div className="app_container">
        <h1 className="heading">Reviews</h1>
        <div className="content_container">
          <button
            type="button"
            className="button_left"
            onClick={this.leftClickButton}
          >
            <img src={leftArrow} alt="left arrow" className="left_arrow" />
          </button>
          <div className="review_container">
            <img src={imgUrl} alt={username} className="profile_image" />
            <p className="name">{username}</p>
            <p className="company_name">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            className="button_left"
            onClick={this.rightClickButton}
          >
            <img src={rightArrow} alt="right arrow" className="left_arrow" />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
