import React from 'react';

function MyAds() {
  return (
    <main role="main">
        <div class="padding-1 page-container ">
            <h3 class="page-title"><i class="pro-stack-lite margin-r-2 "></i> My Ads</h3>
            <div class="sub-container transparent">
                <div class="responsive-tables shadow ">
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