const priceFormat = (price) => {
    if(price){
        return price.toLocaleString('ko-Kr');
    }
    return 0
}

export default priceFormat;