export const findItem = (list, id) => {
    const arr = list.filter(sitem => sitem.idtuyenxe === id);
    if (arr.length > 0) {
        return arr[0];
    }
    else {
        return null;
    }
}

//chuyen obj route sang obj select-react 
export const findValue = (list, id) => {
    const arr = list.filter(sitem => sitem.value === id);
    if (arr.length > 0) {
        return arr[0];
    }
    else {
        return null;
    }
}

//format 
export const formatDate = (item) => {
    const listDate =  [item.substring(8,10),item.substring(5,7),item.substring(0,4)]
    return listDate.join('-')
} 