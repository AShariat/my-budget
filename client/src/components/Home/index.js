import React from 'react';

const bankingLaptop = 'https://media.istockphoto.com/photos/man-using-online-banking-with-credit-card-on-touch-screen-device-picture-id962095876?k=20&m=962095876&s=612x612&w=0&h=yzt6qDr5tnD-vMBMiM_IMYXVPCRnfULnrFy_54w0ooM='
const bankingImage = {
  backgroundImage: `url(${bankingLaptop})`,
  'background-size': 'cover',
  'display': 'flex',
  'justify-content': 'center'
};

const heightWidthBlock = {
  height: 225,
  display: 'block'
};

const transparency = {
  opacity: 0.5
}

function Home(props) {
  window.scrollTo(0, 0);

  return (
    <section>

      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light" style={bankingImage}>
        <div className="col-md-5 p-lg-5 mx-auto my-5 opacity-50">

          <h1 className="display-4 font-weight-normal border border-dark bg-light rounded">Not interested in online banking?</h1>
          <p className="lead font-weight-normal border border-dark bg-light">You are not a loan!</p>

          <div className="btn-group bg-light rounded">
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => { props.changeFunction('Login') }}>Login or Sign-up!</button>
          </div>
        </div>
      </div>

      {/* cards below */}

      <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={heightWidthBlock} src='https://image.shutterstock.com/image-photo/concept-investment-growth-like-growing-260nw-1169168281.jpg' data-holder-rendered="true" />
                                <div className="card-body">
                                    <p className="card-text">I was walking outside when I saw a sign that read 'Watch for children'. Upon reading I thought to myself, "That sounds like one fair trade".</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={heightWidthBlock} src='https://www.esma.europa.eu/sites/default/files/styles/esma_page_main_image/public/main_image/2021/istock-921527422.jpg?itok=avLbehuK' data-holder-rendered="true" />
                                <div className="card-body">
                                    <p className="card-text">Cats and pennies are very similar. They both have a tail on one side and head on the other.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style={heightWidthBlock} src='https://sandypines.com/wp-content/uploads/finance-sandy-pines-campground.jpeg' data-holder-rendered="true" />
                                <div className="card-body">
                                    <p className="card-text">People say wallets make a lot of noise. It's because money talks.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

      <br></br><br></br>

    </section>
  );
};

{/* an a tag that renders the login page */ }

export default Home;