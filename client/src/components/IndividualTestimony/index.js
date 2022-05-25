import React from "react";
import { Link } from 'react-router-dom';

const Customer1 = function (props) {
  window.scrollTo(0, 0);

  return (
    <div className="col-md-8">
      <h3 className="pb-4 mt-2 fst-italic border-bottom">From the Old-Folks</h3>

      <article className="blog-post">
        <h2 className="blog-post-title">I didnt know where the money went!</h2>
        <p className="blog-post-meta">May 18, 2021 by Old Couple</p>

        <p>
          We are so old and wrinkly, we forgot the value of money! We had no
          idea the value of the dollar was so low and that the value of a cup of
          coffee was so high!
        </p>
        <blockquote>
          <p>
            We grew up in a different time, back when we had a{" "}
            <strong>STRONG ECONOMY</strong> and lots of spending cash!
          </p>
        </blockquote>
        <p>
          Thanks to Amirs Budget Tracker, we have been able to see where Ol'
          George spends his war bonds and retirement money! Boy, was he upset
          when I, his wife, found out he spends it all down at sally's beauty
          and strip. Over 60 years of marriage, all down the drain! But at least
          we know how to budget better. Thanks Amir!
        </p>
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

        <p>
          As you can see, Amirs budget tracker has helped this old couple on
          their way to a better financial future, and towards a divorce. Thank
          you again Amir!
        </p>
      </article>
      <div>
        <p>
          <Link className="btn btn-secondary text-white my-2" to="/">
          Click here to learn more about My-Budget!
          </Link>

          <Link className="btn btn-dark text-white my-2 mx-2" to="/login">
          Click here to Login or Sign-Up!
          </Link>
        </p>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

const Customer2 = function (props) {
  window.scrollTo(0, 0);

  return (
    <div className="col-md-8">
      <h3 className="pb-4 mt-2 fst-italic border-bottom">From the Powerful Home of Femininity!</h3>

      <article className="blog-post">
        <h2 className="blog-post-title">A day in the life of... The Queen!</h2>
        <p className="blog-post-meta">December 23, 2020 by Young Woman</p>

        <p>
          I used to spend my days girl-bossing, slaying and overall being a bad-ass. I would work hard and play hard. I Spent my money on fabulous vacations, makeup pallets and awesome shopping sprees! I had not a care in the world and no one who could stop my stride! But I did have one pitfall... my expenses...
        </p>
        <blockquote>
          <p>
          "I Spent my money on 
            <strong> fabulous vacations</strong>, makeup pallets and awesome shopping sprees!""
          </p>
        </blockquote>
        <p>
          Thanks to Amir's 'My-Budget' I was able to defeat the only thing that could stand in my way! Now nothing can stop the ever omniscient, omnipresent and all powerful woman that I am! May the world quiver and shake with fear <strong>KNOWING THEIR DOOM IS SOON UPON THEM. I AM THE LIGHT AND THE DARKNESS, THE ALPHA AND THE OMEGA, THE BEGINNING AND THE END! AND I AM HERE!!!</strong>
        </p>
        <br></br>
        <h3>Young Womans spending habits BEFORE My-Budget</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Income</th>
              <th>Expenditures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>$10,000.00</td>
              <td>$11,000.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Totals</td>
              <td>$10,000.00</td>
              <td>$11,000.00</td>
            </tr>
          </tfoot>
        </table>
        <br></br>
        <h3>Young Womans spending habits AFTER My-Budget</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Income</th>
              <th>Expenditures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>$10,000.00</td>
              <td>$9,999.99</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Totals</td>
              <td>$10,000.00</td>
              <td>$9,999.99</td>
            </tr>
          </tfoot>
        </table>
        <p>
          As you can see, Amirs budget tracker has helped this Queen to a better financial situation. Not only that, but he seems to have accidently found the harbinger of the ends times, the one who will bring calamity and destruction to humanity. Thanks Amir!
        </p>
      </article>
      <div>
        <p>
        <Link className="btn btn-secondary text-white my-2" to="/">
          Click here to learn more about My-Budget!
          </Link>

          <Link className="btn btn-dark text-white my-2 mx-2" to="/login">
          Click here to Login or Sign-Up!
          </Link>
        </p>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

const Customer3 = function (props) {
  window.scrollTo(0, 0);

  return (
    <div className="col-md-8">
      <h3 className="pb-4 mt-2 fst-italic border-bottom">From the BlockChain!</h3>

      <article className="blog-post">
        <h2 className="blog-post-title">From the den of an NFT Artist</h2>
        <p className="blog-post-meta">December 23, 2020 by Hip Young Dude</p>

        <p>
          I used to spend my days drifting in and out of consiousness. Only spending my waking hours by playing video games and yelling at my mom for more Totinos© pizza rolls. That was before I discovered the amazing world of cryptocurrency and the blockchain! Now I spend my waking hours watching currencies rise and fall, buying the dip when I can and then watching a scammer dump a coin and steal all my invested money away. But boy, am I bad with my finances sometimes!
        </p>
        <blockquote>
          <p>
          "But boy,
            <strong> am I bad</strong> with my finances sometimes!"
          </p>
        </blockquote>
        <p>
          This was well before I found Amir's 'My-Budget'! Now I never fail for crypto pump and dump scams! I mean... I do... But I have a better grasp on my budget now, So I can account for my gains and losses!
        </p>
        <br></br>
        <h3>Hip Young Dude's Expenditures BEFORE My-Budget</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Income</th>
              <th>Expenditures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hip Young Dude</td>
              <td>.05 Bitcoin</td>
              <td>However much pizza rolls cost?..</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Totals</td>
              <td>.05 Bitcoin</td>
              <td>However much pizza rolls cost?..</td>
            </tr>
          </tfoot>
        </table>
        <br></br>
        <h3>Hip Young Dude's Expenditures AFTER My-Budget</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Income</th>
              <th>Expenditures</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hip Young Dude</td>
              <td>.05 Bitcoin</td>
              <td>However much pizza rolls cost?..</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Totals</td>
              <td>.05 Bitcoin</td>
              <td>Still the cost of pizza rolls, but now with coupons</td>
            </tr>
          </tfoot>
        </table>

        <p>
          As you can see, Amirs budget tracker has helped this Hip Young Dude on
          his way to a better financial future. Hopefully, With lot of bitcoins, and maybe a place of his own! Wouldn't Mom be proud... and finally alone! Thanks Amir!
        </p>
      </article>
      <div>
        <p>
        <Link className="btn btn-secondary text-white my-2" to="/">
          Click here to learn more about My-Budget!
          </Link>

          <Link className="btn btn-dark text-white my-2 mx-2" to="/login">
          Click here to Login or Sign-Up!
          </Link>
        </p>
      </div>
      <br></br>
    </div>
  );
};

export { Customer1, Customer2, Customer3 };
