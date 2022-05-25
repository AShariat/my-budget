import React from "react";
import { Link } from 'react-router-dom';

const heightWidthBlock = {
  height: 225,
  display: "block",
};

function Testimonials(props) {
  return (
    <section className="container-fluid" id='testimonialsID'>
      <div className="jumbotron text-center">
        <h1 className="jumbotron-heading">
          Why are Irish bankers so successful? Because their capital’s always
          Dublin!
        </h1>
        <p className="lead text-muted">
          Below you will find some made up statements from our made up
          customers! They love our app, and you should too!
        </p>
      </div>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  style={heightWidthBlock}
                  src="https://previews.123rf.com/images/fizkes/fizkes1907/fizkes190700121/126490052-happy-senior-old-family-couple-clients-make-financial-insurance-estate-business-deal-handshake-agent.jpg"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <p className="card-text">
                    This is one of the schmucks we scammed out of all his
                    money-- I mean, one of our loyal customers, who's VERY happy
                    with us!
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link className="text-white" to="/elderly-finance">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Read their story!
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  style={heightWidthBlock}
                  src="https://thumbs.dreamstime.com/z/happy-african-american-woman-holding-piggy-bank-sitting-couch-home-piggybank-saving-money-future-secure-herself-199966533.jpg"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <p className="card-text">
                    This is one of the schmucks we scammed out of all his
                    money-- I mean, one of our loyal customers, who's VERY happy
                    with us!
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <Link className="text-white" to="/female-finance">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Read her story!
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img
                  className="card-img-top"
                  data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                  alt="Thumbnail [100%x225]"
                  style={heightWidthBlock}
                  src="https://thumbs.dreamstime.com/b/happy-smiling-asian-customer-old-man-showing-ok-happy-smiling-asian-customer-old-man-showing-ok-sign-young-salesman-closing-213507888.jpg"
                  data-holder-rendered="true"
                />
                <div className="card-body">
                  <p className="card-text">
                    This is one of the schmucks we scammed out of all his
                    money-- I mean, one of our loyal customers, who's VERY happy
                    with us!
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    <Link className="text-white" to="/single-finance">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Read his story!
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
