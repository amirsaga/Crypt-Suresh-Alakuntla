import React from 'react'
import { Link } from 'react-router-dom';
function home() {


    const crytodata = [
        {
            rank: 1,
            name: "Bitcoin",
            price: "$50,000",
            marketCap: "$1 Trillion"
        },
        {
            rank: 2,
            name: "Ethereum",
            price: "$4,000",
            marketCap: "$500 Billion"
        },
    ];
    return (
        <div className="home">
        <h1>Welcome to the Crypto Website</h1>
        <div className="table-content">
            <table className="table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                    </tr>

                </thead>
                <tbody>
                     {crytodata.map((crypto) => (
                        <tr key={crypto.rank}>
                            <td>{crypto.rank}</td>
                            <td>
                               <Link to="/details"> {crypto.name} </Link>
                            </td>
                            <td>{crypto.price}</td>
                            <td>{crypto.marketCap}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
        
    );
}

export default home;