import React from 'react';

function Dashboard() {
  return (
<main role="main">
        <div className="padding-1 page-container ">
            <h3 className="page-title"><i className="pro-home-lite margin-r-2"></i> Dashboard</h3>
            <div className="sub-container transparent">
                <div className="analytics-holder">
                    <div className="analytics shadow white border-radius">
                        <h4 className="analytics-title">My property Overview</h4>
                        <div className="d-flex">
                            <div className="analytics-chart">
                                <div className="analytics-colchart">

                                </div>
                            </div>
                            <div className="analytics-metrics">
                                <p className="views analytics-count">0</p>
                                <p className="analytics-metric">Bounce rate <span>16%</span></p>
                                <p className="analytics-metric">New visitors <span>23%</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-y card-left dash-cards">
                        <div className="card-left full-width">
                            <div className="stat-card shadow ">
                                <p className="margin-l-3 margin-t-2">All my Ads</p>
                                <h2 id="all-ads" className="align-center margin-3">200</h2>
                                <b className="btn teal">A</b>
                            </div>
                            <div className="stat-card shadow ">
                                <p className="margin-l-3 margin-t-2">Active Ads</p>
                                <h2 id="active-ads" className="align-center margin-3 blue-txt">200</h2>
                                <b className="btn blue">S</b>
                            </div>
                        </div>
                        <div className="card-left full-width margin-t-3">
                            <div className="stat-card shadow ">
                                <p className="margin-l-3 margin-t-2">Sold views</p>
                                <h2 id="sold-ads" className="views align-center margin-3">200</h2>
                                <b className="btn orange">S</b>
                            </div>
                            <div className="stat-card shadow ">
                                <p className="margin-l-3 margin-t-2">flagged Ads</p>
                                <h2 id="flagged-ads" className="align-center margin-3">0</h2>
                                <b className="btn red">F</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="responsive-tables margin-t-4 ">
                    <h4 className="white padding-2">My Recent Ads </h4>
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