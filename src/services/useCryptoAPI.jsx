import { useEffect } from "react";
import { addCoins } from "../Utils/CoinSlice";
import { useDispatch } from "react-redux";


const useCryptoAPI =() =>{
	const dispatch = useDispatch();

	const getCoins =async()=>{
	const url = 'https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'd174c0a8d3msh5505beb042653d1p13cf55jsn061b99d4f7e6',
			'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
		}
	};
	
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		const stats = result?.data;
		dispatch(addCoins({
			total:stats.totalCoins, markets:stats.totalMarkets, exchanges:stats.totalExchanges, volume:stats.total24hVolume, cap:stats.totalMarketCap }))
	} catch (error) {
		console.error(error);
	}
}

		useEffect(()=>{
			getCoins();
		},[])
	}

export default useCryptoAPI