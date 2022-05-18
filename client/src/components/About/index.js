import React from 'react';


function About(props) {
  window.scrollTo(0, 0);
  
  return (
    <section>
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-3">Hello, Finance-Fighters!</h1>
          <p>With our budget tracker, thousands have been able to save, invest and build their capital thanks to our organizational tool. It allows even the most layman to track their expenditures in a method that will allow them to have great future growth and not exceed their current abilities. </p>
          <p><a class="btn btn-primary btn-lg bg-light border-light" onClick={() => { props.changeFunction('Testimonials')}} role="button">Listen to our happy customers! »</a></p>
          <p>Or read some of the articles below from world recognized financial leaders about our incredible work!</p>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h2>Forbes Review!</h2>
            <p>With more than 924,737 ratings on the App Store and Google Play, Amirs Budget-Tracker dwarfs its competitors in terms of reported user experience. Amirs Budget-Tracker earns a spot on Forbes Advisors’ Best Budgeting Apps and is worth strong consideration for helping meet your budgeting needs.</p>
            <p><a class="btn btn-secondary" href="https://www.forbes.com/advisor/banking/mint-budgeting-app-review/" role="button">View Review Details »</a></p>
          </div>
          <div class="col-md-4">
            <h2>The Best Ways for Couples to Manage Finances</h2>
            <p>One in five couples identifies money as their greatest relationship challenge, according to a 2021 Fidelity Investments survey.</p>
            <p><a class="btn btn-secondary" href="https://www.wsj.com/articles/best-ways-for-couples-to-manage-finances-11644264301?page=1" role="button">View details »</a></p>
          </div>
          <div class="col-md-4">
            <h2>Wait... How did this one get here?</h2>
            <p>Paying through phone apps may seem the easiest route to purchase items these days, but scammers are also using these apps to take your money.</p>
            <p><a class="btn btn-secondary" href="https://www.news8000.com/beware-of-scam-apps/" role="button">View News Details »</a></p>
          </div>
        </div>
      </div>

      </section>
  )
};

export default About;