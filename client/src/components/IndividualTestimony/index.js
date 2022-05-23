import React from 'react';

const Customer1 = function(props) {
  window.scrollTo(0, 0);
  
    return (
        <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        From the Old-Folks
      </h3>

      <article className="blog-post">
        <h2 className="blog-post-title">I didnt know where the money went!</h2>
        <p className="blog-post-meta">May 18, 2021 by Old Couple</p>

        <p>We are so old and wrinkly, we forgot the value of money! We had no idea the value of the dollar was so low and that the value of a cup of coffee was so high!</p>
        <blockquote>
          <p>We grew up in a different time, back when we had a <strong>STRONG ECONOMY</strong> and lots of spending cash!</p>
        </blockquote>
        <p>Thanks to Amirs Budget Tracker, we have been able to see where Ol' George spends his war bonds and retirement money! Boy, was he upset when I, his wife, found out he spends it all down at sally's beauty and strip. Over 60 years of marriage, all down the drain! But at least we know how to budget better. Thanks Amir!</p>
        <h3>Spending before Amirs Budget Tracker</h3>
        <p>Woah! Look at those numbers! These people Amir!</p>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Income per Month</th>
              <th>Expenditures per Month</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>0$</td>
              <td>800$</td>
            </tr>
            <tr>
              <td>George</td>
              <td>5,000$</td>
              <td>4,200$</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Totals</td>
              <td>5000$</td>
              <td>5000$</td>
            </tr>
          </tfoot>
        </table>

        <h3>Spending after Amirs Budget Tracker</h3>
        <p>Woah! Look at those numbers! Thanks Amir!</p>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Income per Month</th>
              <th>Expenditures per Month</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>0$</td>
              <td>800$</td>
            </tr>
            <tr>
              <td>George</td>
              <td>5,000$</td>
              <td>0$</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Totals</td>
              <td>5000$</td>
              <td>800$</td>
            </tr>
          </tfoot>
        </table>


        <p>As you can see, Amirs budget tracker has helped this old couple on their way to a better financial future, and towards a divorce. Thank you again Amir!</p>
      </article>
      <div><p>
                        <a onClick={() => { props.changeFunction('About')}} className="btn btn-secondary text-white my-2">Learn more about us!</a>
                        <a onClick={() => { props.changeFunction('Testimonials')}} className="btn btn-dark text-white my-2 mx-2">Read another happy customers thoughts!</a>
                        <a onClick={() => { props.changeFunction('Login')}} className="btn btn-secondary text-white my-2">Login, or sign up!</a>
                    </p></div>
      <br></br><br></br>
    </div>
    );
};

const Customer2 = function(props) {
  window.scrollTo(0, 0); 

    return (
        <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        From the Firehose
      </h3>

      <article className="blog-post">
        <h2 className="blog-post-title">Another blog post</h2>
        <p className="blog-post-meta">December 23, 2020 by Old Couple</p>

        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <blockquote>
          <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
        </blockquote>
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <h3>Example table</h3>
        <p>And don't forget about tables in these posts:</p>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Upvotes</th>
              <th>Downvotes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>10</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>4</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Charlie</td>
              <td>7</td>
              <td>9</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Totals</td>
              <td>21</td>
              <td>23</td>
            </tr>
          </tfoot>
        </table>

        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
      </article>
      <div><p>
                        <a onClick={() => { props.changeFunction('About')}} className="btn btn-secondary text-white my-2">Learn more about us!</a>
                        <a onClick={() => { props.changeFunction('Testimonials')}} className="btn btn-dark text-white my-2 mx-2">Read another happy customers thoughts!</a>
                        <a onClick={() => { props.changeFunction('Login')}} className="btn btn-secondary text-white my-2">Login, or sign up!</a>
                    </p></div>
      <br></br><br></br>
    </div>
    );
};

const Customer3 = function(props) {
  window.scrollTo(0, 0);

    return (
        <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        From the Firehose
      </h3>

      <article className="blog-post">
        <h2 className="blog-post-title">Another blog post</h2>
        <p className="blog-post-meta">December 23, 2020 by Old Couple</p>

        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <blockquote>
          <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
        </blockquote>
        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
        <h3>Example table</h3>
        <p>And don't forget about tables in these posts:</p>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Upvotes</th>
              <th>Downvotes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>10</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>4</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Charlie</td>
              <td>7</td>
              <td>9</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Totals</td>
              <td>21</td>
              <td>23</td>
            </tr>
          </tfoot>
        </table>

        <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
      </article>
      <div><p>
                        <a onClick={() => { props.changeFunction('About')}} className="btn btn-secondary text-white my-2">Learn more about us!</a>
                        <a onClick={() => { props.changeFunction('Testimonials')}} className="btn btn-dark text-white my-2 mx-2">Read another happy customers thoughts!</a>
                        <a onClick={() => { props.changeFunction('Login')}} className="btn btn-secondary text-white my-2">Login, or sign up!</a>
                    </p></div>
      <br></br><br></br>
    </div>
    );
};

export {
  Customer1,
  Customer2,
  Customer3
};