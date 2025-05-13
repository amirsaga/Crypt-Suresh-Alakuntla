import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCryptoDetails } from '../api';
import {
CircularProgress, Typography, Container
} from '@mui/material';

export default function CryptoDetail() {
const { id } = useParams();
const [coin, setCoin] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    getCryptoDetails(id).then(res => {
    setCoin(res.data);
    setLoading(false);
    }).catch(() => setLoading(false));
    }, [id]);

if (loading) return <CircularProgress />;

if (!coin) return <Typography>Error loading coin data</Typography>;

return (
        <Container>
            <Typography variant="h4">{coin.name} ({coin.symbol.toUpperCase()})</Typography>
                <img src={coin.image.large} alt={coin.name} width={100} />
            <Typography>Current Price: ${coin.market_data.current_price.usd.toLocaleString()}</Typography>
            <Typography>Market Cap: ${coin.market_data.market_cap.usd.toLocaleString()}</Typography>
            <Typography>Homepage: <a href={coin.links.homepage[0]}>{coin.links.homepage[0]}</a></Typography>
            
        </Container>
);
}