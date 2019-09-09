import React from 'react';

function Home() {
  return (
    <main id="myFrame" role="main">
        <div className="flex-y margin-b-6 full-width">
            <div className="landing d-flex full-width">
                <div className="left-side  margin-t-1 margin-l-3">
                    <div className="page">
                        <span>Get a new home today</span>
                    </div>
                </div>
                <div className="right-side">
                    <img src="./assets/img/ads/house_PNG7.webp" alt="landding" />
                </div>
            </div>
            <div className="padding-1 border-radius full-width white shadow-top  margin-b-6 margin-t-n6">
                <div className="land-roll flex-y-center">
                    <span className="btn teal round">Popular</span>
                    <div className="margin-l-auto d-flex">
                        <a onClick="popular()" className="btn blue margin-x-2"><i className="pro-fire-lite margin-r-1"></i>Popular</a>
                        <a onClick="latest()" className="btn blue  margin-x-2"><i className="pro-alarm-lite margin-r-1"></i>Latest</a>
                    </div>
                </div>
                <div id="popular" className="card-wrapper flex-center">
                </div>
                <div className="land-roll flex-y-center margin-y-2 top-border">
                    <span className="btn teal round">Latest</span>
                </div>
                <div id="latest" className="card-wrapper flex-center">
                </div>
            </div>
        </div>
    </main>
    );
}

export default Home;