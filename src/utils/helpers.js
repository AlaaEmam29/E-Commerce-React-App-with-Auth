export const formatPrice = (price) => {
    return  (price / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}