function gst(amt, rate)
{
    let ans = amt*rate/100;
    let fin_price = amt+ans;
    return fin_price;
}

function state_tx(amt, rate)
{
    let ans = amt*rate/100;
    let fin_price = (amt+ans)-200;
    return fin_price;
}

function shipping(amt)
{
    if(amt < 10000)
    {
        return amt+800;    
    }
    if(amt >= 10000)
    {
        return amt+500;   
    }
}


let x = state_tx(15000, 2);




console.log(x);