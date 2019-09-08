import React from 'react';

function Home() {
  return (
    <main id="myFrame" role="main">
        <div class="flex-y margin-b-6 full-width">
            <div class="landing d-flex full-width">
                <div class="left-side  margin-t-1 margin-l-3">
                    <div class="page">
                        <span>Get a new home today</span>
                    </div>
                </div>
                <div class="right-side">
                    <img src="./assets/img/ads/house_PNG7.webp" alt="landding" />
                </div>
            </div>
            <div class="padding-1 border-radius full-width white shadow-top  margin-b-6 margin-t-n6">
                <div class="land-roll flex-y-center">
                    <span class="btn teal round">Popular</span>
                    <div class="margin-l-auto d-flex">
                        <a onclick="popular()" class="btn blue margin-x-2"><i class="pro-fire-lite margin-r-1"></i>Popular</a>
                        <a onclick="latest()" class="btn blue  margin-x-2"><i class="pro-alarm-lite margin-r-1"></i>Latest</a>
                    </div>
                </div>
                <div id="popular" class="card-wrapper flex-center">
                </div>
                <div class="land-roll flex-y-center margin-y-2 top-border">
                    <span class="btn teal round">Latest</span>
                </div>
                <div id="latest" class="card-wrapper flex-center">
                </div>
            </div>
        </div>
    </main>
    );
}

export default Home;