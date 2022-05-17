import React from 'react';

const heightWidthBlock = {
    height: 225,
    display: 'block'
};

function Testimonials(props) {

    return (
        <main role="main">

            <section class="jumbotron text-center">
                <div class="container">
                    <h1 class="jumbotron-heading">Some funny financial statement</h1>
                    <p class="lead text-muted">Below you will find some made up statements from our made up customers! They love our app, and you should too!</p>
                    <p>
                        <a onClick={() => { props.changeFunction('About')}} class="btn btn-primary my-2">Learn more about us!</a>
                        <a onClick={() => { props.changeFunction('Login')}} class="btn btn-secondary my-2">Login, or sign up!</a>
                    </p>
                </div>
            </section>

            <div class="album py-5 bg-light">
                <div class="container">

                    <div class="row">
                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={heightWidthBlock} src='https://previews.123rf.com/images/fizkes/fizkes1907/fizkes190700121/126490052-happy-senior-old-family-couple-clients-make-financial-insurance-estate-business-deal-handshake-agent.jpg' data-holder-rendered="true" />
                                <div class="card-body">
                                    <p class="card-text">This is one of the schmucks we scammed out of all his money-- I mean, one of our loyal customers, who's VERY happy with us!</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read his story!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={heightWidthBlock} src='https://thumbs.dreamstime.com/z/happy-african-american-woman-holding-piggy-bank-sitting-couch-home-piggybank-saving-money-future-secure-herself-199966533.jpg' data-holder-rendered="true" />
                                <div class="card-body">
                                    <p class="card-text">This is one of the schmucks we scammed out of all his money-- I mean, one of our loyal customers, who's VERY happy with us!</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read his story!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card mb-4 box-shadow">
                                <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={heightWidthBlock} src='https://thumbs.dreamstime.com/b/happy-smiling-asian-customer-old-man-showing-ok-happy-smiling-asian-customer-old-man-showing-ok-sign-young-salesman-closing-213507888.jpg' data-holder-rendered="true" />
                                <div class="card-body">
                                    <p class="card-text">This is one of the schmucks we scammed out of all his money-- I mean, one of our loyal customers, who's VERY happy with us!</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary">Read his story!</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </main>
    );
};

export default Testimonials;