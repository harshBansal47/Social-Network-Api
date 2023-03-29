const Paginate = (Array,page_size,page_number)=>{
    return Array.slice((page_number-1)*page_size,page_number*page_size);
}
module.exports = Paginate;