import { useEffect } from 'react';
import { addPercentage } from '../utility/utility';

//materialize
import 'materialize-css'; 
import 'materialize-css/dist/css/materialize.min.css';
import { Table } from 'react-materialize';

function Home() {

//BTCUSD
useEffect(()=>{
    const BTCUSDws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
    BTCUSDws.onopen = function () {
        let msg = JSON.stringify({ 
            event: 'subscribe', 
            channel: 'ticker', 
            symbol: 'tBTCUSD' 
        })
        BTCUSDws.send(msg)
    }
    BTCUSDws.onmessage = (event) => {
        const dataArray = JSON.parse(event.data)
        
        if(dataArray[1]!==undefined && typeof dataArray[1]==='object' ){
            document.getElementById('DAILY_CHANGE_RELATIVE_BTCUSD').innerHTML = addPercentage(dataArray[1][5]);
            document.getElementById('VOLUME_BTCUSD').innerHTML = dataArray[1][8].toFixed(3);
            document.getElementById('LAST_PRICE_BTCUSD').innerHTML = dataArray[1][7].toFixed(3);
        }
    }
    return () => BTCUSDws.close()
});

//BTCEUR
useEffect(()=>{
    const BTCEURws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
    BTCEURws.onopen = function () {
    let msg = JSON.stringify({ 
        event: 'subscribe', 
        channel: 'ticker', 
        symbol: 'tBTCEUR' 
    })
    BTCEURws.send(msg)
    }
    BTCEURws.onmessage = (event) => {
        const dataArray = JSON.parse(event.data)
        if(dataArray[1]!==undefined && typeof dataArray[1]==='object' ){
            document.getElementById('DAILY_CHANGE_RELATIVE_BTCEUR').innerHTML = addPercentage(dataArray[1][5]);
            document.getElementById('VOLUME_BTCEUR').innerHTML = dataArray[1][8].toFixed(3);
            document.getElementById('LAST_PRICE_BTCEUR').innerHTML = dataArray[1][7].toFixed(3);
        }
    }
    return () => BTCEURws.close()
})

//ETHUSD
useEffect(()=>{
    const ETHUSDws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
    ETHUSDws.onopen = function () {
    let msg = JSON.stringify({ 
        event: 'subscribe', 
        channel: 'ticker', 
        symbol: 'tETHUSD' 
    })
    ETHUSDws.send(msg)
    }
    ETHUSDws.onmessage = (event) => {
        //console.log(event)
        const dataArray = JSON.parse(event.data)
        if(dataArray[1]!==undefined && typeof dataArray[1]==='object' ){
                document.getElementById('DAILY_CHANGE_RELATIVE_ETHUSD').innerHTML = addPercentage(dataArray[1][5]);
                document.getElementById('VOLUME_ETHUSD').innerHTML = dataArray[1][8].toFixed(3);
                document.getElementById('LAST_PRICE_ETHUSD').innerHTML = dataArray[1][7].toFixed(3);
        }
    }
    return () => ETHUSDws.close()
})
    
//ETHEUR
useEffect(()=>{
    const ETHEURws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
    ETHEURws.onopen = function () {
        let msg = JSON.stringify({ 
            event: 'subscribe', 
            channel: 'ticker', 
            symbol: 'tETHEUR' 
    })
    ETHEURws.send(msg)
    }
    ETHEURws.onmessage = (event) => {
        const dataArray = JSON.parse(event.data)
        if(dataArray[1]!==undefined && typeof dataArray[1]==='object' ){
                document.getElementById('DAILY_CHANGE_RELATIVE_ETHEUR').innerHTML = addPercentage(dataArray[1][5]);
                document.getElementById('VOLUME_ETHEUR').innerHTML = dataArray[1][8].toFixed(3);
                document.getElementById('LAST_PRICE_ETHEUR').innerHTML = dataArray[1][7].toFixed(3);
        }
    }
    return () => ETHEURws.close()
})    
//EOSUSD
useEffect(()=>{
    const EOSUSDws = new WebSocket('wss://api-pub.bitfinex.com/ws/2');
    EOSUSDws.onopen = function () {
        let msg = JSON.stringify({ 
            event: 'subscribe', 
            channel: 'ticker', 
            symbol: 'tEOSUSD' 
    })
    EOSUSDws.send(msg)
    }
    EOSUSDws.onmessage = (event) => {
        const dataArray = JSON.parse(event.data)
        if(dataArray[1]!==undefined && typeof dataArray[1]==='object' ){
            document.getElementById('DAILY_CHANGE_RELATIVE_EOSUSD').innerHTML = addPercentage(dataArray[1][5]);
            document.getElementById('VOLUME_EOSUSD').innerHTML = dataArray[1][8].toFixed(3);
            document.getElementById('LAST_PRICE_EOSUSD').innerHTML = dataArray[1][7].toFixed(3);
        }
    }
    return () => EOSUSDws.close()
})   
    return(
        <div className='tableDiv  '>
            <Table>
                <thead>
                    <tr>
                    <th data-field="id">
                        #
                    </th>
                    <th data-field="id">
                        Symbol
                    </th>
                    <th data-field="name">
                        Daily change
                    </th>
                    <th data-field="price">
                        Volume
                    </th>
                    <th data-field="price">
                        Last price
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> 1 </td>
                        <td > BTCUSD </td>
                        <td id='DAILY_CHANGE_RELATIVE_BTCUSD'> </td>
                        <td id='VOLUME_BTCUSD'> </td>
                        <td id='LAST_PRICE_BTCUSD'> </td>
                    </tr>
                    <tr>
                        <td> 2 </td>
                        <td > BTCEUR </td>
                        <td id='DAILY_CHANGE_RELATIVE_BTCEUR'> </td>
                        <td id='VOLUME_BTCEUR'> </td>
                        <td id='LAST_PRICE_BTCEUR'> </td>
                    </tr>
                    <tr>
                        <td> 3 </td>
                        <td > ETHUSD </td>
                        <td id='DAILY_CHANGE_RELATIVE_ETHUSD'> </td>
                        <td id='VOLUME_ETHUSD'> </td>
                        <td id='LAST_PRICE_ETHUSD'> </td>
                    </tr>
                    <tr>
                        <td> 4 </td>
                        <td > ETHEUR </td>
                        <td id='DAILY_CHANGE_RELATIVE_ETHEUR'> </td>
                        <td id='VOLUME_ETHEUR'> </td>
                        <td id='LAST_PRICE_ETHEUR'> </td>
                    </tr>
                    <tr>
                        <td> 5 </td>
                        <td > EOSUSD </td>
                        <td id='DAILY_CHANGE_RELATIVE_EOSUSD'> </td>
                        <td id='VOLUME_EOSUSD'> </td>
                        <td id='LAST_PRICE_EOSUSD'> </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Home;
