const priceFormat = (price: number) => {
    if(price){
        return price.toLocaleString('ko-Kr');
    }
    return price || 0
}

export default priceFormat;