export function idbPromise(storeName, method, object) {
    return new Promise((resolve, reject) => {
        //open connection to database
        const request = window.indexedDB.open('too-good-to-waste', 1);

        //variables to hold reference to the database, transaction and object store
        let db, tx, store;

        request.onupgradeneeded = function(e) {
            const db = request.result;
            db.createObjectStore('products', { keyPath: '_id' });
            db.createObjectStore('cart', { keyPath: '_id' });
        };

        //handle connection errors
        request.onerror = function(e) {
            console.log('There was an error!')
        };

        //on database open success
        request.onsuccess = function(e) {
            //save a reference of the database to the db variable
            db = request.result;
            //open a transaction 
            tx = db.transaction(storeName, 'readwrite');
            //save a reference to that object store
            store = tx.objectStore(storeName);

            //catch errors
            db.onerror = function(e) {
                console.log('error', e);
            };

            switch (method) {
                case 'put':
                    store.put(object);
                    resolve(object);
                    break;
                case 'get':
                    const all = store.getAll();
                    all.onsuccess = function() {
                        resolve(all.result);
                    };
                    break;
                case 'delete':
                    store.delete(object._id);
                    break;
                default:
                    console.log('No valid method');
                    break;
            }

            //when transaction complete, close connection
            tx.oncomplete = function() {
                db.close();
            };
        };
    }); 
}