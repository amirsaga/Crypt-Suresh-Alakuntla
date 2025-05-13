import React, { useEffect, useState } from 'react';
import {
Table, TableBody, TableCell, TableContainer, TableHead,
TableRow, Paper, CircularProgress, Typography , Container
} from '@mui/material';
import { Link } from 'react-router-dom';
import { getCryptoList } from '../api';

export default function CryptoTable() {
const [cryptos, setCryptos] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
        getCryptoList().then(res => {
        setCryptos(res.data);
        setLoading(false);
        }).catch(() => setLoading(false));
}, []);

if (loading) return <CircularProgress />;

return (
<>
    <Container sx={{ mt:5}} maxWidth ="sm">
    <Typography variant="h4" gutterBottom>Cryptocurrency Market</Typography>
    <TableContainer component={Paper} sx={{ mt:7}} maxWidth ="sm">
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Symbol</TableCell>
                    <TableCell>Price (USD)</TableCell>
                    <TableCell>Market Cap</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cryptos.map(coin => (
                <TableRow key={coin.id}>
                    <TableCell>
                        <Link to={`/crypto/${coin.id}`}>{coin.name}</Link>
                    </TableCell>
                    <TableCell>{coin.symbol.toUpperCase()}</TableCell>
                    <TableCell>${coin.current_price.toLocaleString()}</TableCell>
                    <TableCell>${coin.market_cap.toLocaleString()}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    </Container>
</>
);
}
