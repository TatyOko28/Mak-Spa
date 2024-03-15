import React, { Component } from 'react';
import './style.css';

interface Review {
  name: string;
  review: string;
  date: string;
}

interface Reviews {
  [key: string]: Review;
}

interface Data {
  ru: Reviews;
  en: Reviews;
}

interface State {
  reviews: Review[];
  currentPage: number;
  reviewsPerPage: number;
}

class Main extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      reviews: [],
      currentPage: 1,
      reviewsPerPage: 10,
    };
  }

  componentDidMount() {
    fetch('/data/data.json')
      .then(response => response.json())
      .then((data: Data) => {
        const reviewsArray: Review[] = Object.values(data.ru).map(item => item);
        this.setState({ reviews: reviewsArray });
      })
      .catch(error => console.error("Fetching data failed", error));
  }

  changePage = (pageNumber: number) => {
    this.setState({ currentPage: pageNumber });
  };

  renderPagination = () => {
    const { reviews, reviewsPerPage } = this.state;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(reviews.length / reviewsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <button onClick={() => this.changePage(number)} className="page-link">
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  render() {
    const { reviews, currentPage, reviewsPerPage } = this.state;
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    return (
      <div className="main">
        {currentReviews.map((review, index) => (
          <div key={index} className="review">
            <h3>{review.name}</h3>
            <p>{review.review}</p>
            <small>{review.date}</small>
          </div>
        ))}
        {this.renderPagination()}
      </div>
    );
  }
}

export default Main;
