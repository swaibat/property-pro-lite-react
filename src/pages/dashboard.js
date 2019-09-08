import React from 'react';

function Dashboard() {
  return (
<main role="main">
        <div class="padding-1 page-container ">
            <h3 class="page-title"><i class="pro-home-lite margin-r-2"></i> Dashboard</h3>
            <div class="sub-container transparent">
                <div class="analytics-holder">
                    <div class="analytics shadow white border-radius">
                        <h4 class="analytics-title">My property Overview</h4>
                        <div class="d-flex">
                            <div class="analytics-chart">
                                <div class="analytics-colchart">

                                </div>
                            </div>
                            <div class="analytics-metrics">
                                <p class="views analytics-count">0</p>
                                <p class="analytics-metric">Bounce rate <span>16%</span></p>
                                <p class="analytics-metric">New visitors <span>23%</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="flex-y card-left dash-cards">
                        <div class="card-left full-width">
                            <div class="stat-card shadow ">
                                <p class="margin-l-3 margin-t-2">All my Ads</p>
                                <h2 id="all-ads" class="align-center margin-3">200</h2>
                                <b class="btn teal">A</b>
                            </div>
                            <div class="stat-card shadow ">
                                <p class="margin-l-3 margin-t-2">Active Ads</p>
                                <h2 id="active-ads" class="align-center margin-3 blue-txt">200</h2>
                                <b class="btn blue">S</b>
                            </div>
                        </div>
                        <div class="card-left full-width margin-t-3">
                            <div class="stat-card shadow ">
                                <p class="margin-l-3 margin-t-2">Sold views</p>
                                <h2 id="sold-ads" class="views align-center margin-3">200</h2>
                                <b class="btn orange">S</b>
                            </div>
                            <div class="stat-card shadow ">
                                <p class="margin-l-3 margin-t-2">flagged Ads</p>
                                <h2 id="flagged-ads" class="align-center margin-3">0</h2>
                                <b class="btn red">F</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="responsive-tables margin-t-4 ">
                    <h4 class="white padding-2">My Recent Ads </h4>
                    <table>
                        <thead>
                            <tr>
                                <th>image</th>
                                <th>Type</th>
                                <th>price</th>
                                <th>status</th>
                                <th>operation</th>
                            </tr>
                        </thead>
                        <tbody id="ads"></tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
     );
    }
    
export default Dashboard;