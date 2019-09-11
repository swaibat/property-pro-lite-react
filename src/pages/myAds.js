import React from 'react';

function MyAds() {
  return (
    <main role="main">
        <div className="padding-1 page-container ">
            <h3 className="page-title"><i className="pro-stack-lite margin-r-2 "></i> My Ads</h3>
            <div className="sub-container transparent">
                <div className="responsive-tables shadow ">
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

export default MyAds;