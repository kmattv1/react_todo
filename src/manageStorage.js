
export function addItem(item){
        if (item.value !== ''){
            if (typeof(localStorage.list) !== 'undefined'){
                const list = JSON.parse(localStorage.list);
                item.id = list.length;
                list.push(item);
                localStorage.setItem('list', JSON.stringify(list));
                return true;
            } else {
                localStorage.setItem('list', JSON.stringify([item]));
                return true;
            }
        }
        return false;
}

export function changeStoredList(item, task){
    console.log(item);
    if (item.value !== ''){
            if (typeof(localStorage.list) != 'undefined'){
                const list = JSON.parse(localStorage.list);
                var newList = [];

                for (let i =0; i < list.length; i+=1){
                    if (typeof(item.id) != 'undefined' && 
                        typeof(list[i].id) != 'undefined' &&
                        list[i].id == item.id){
                        if (task == 'update'){
                            newList[i] = item;
                        }
                    } else {
                        newList[i] = list[i];
                    }
                }

                console.log(newList);
                localStorage.setItem('list', JSON.stringify(newList));
            }
        }
    return false;
}

export function getNextId(){
    return (typeof(localStorage.list) != 'undefined') ? JSON.parse(localStorage.list).length : 0 ; 
}

export function updateItem(item){
    changeStoredList(item, 'update');
}

export function deleteItem(item){
    changeStoredList(item, 'delete');
}