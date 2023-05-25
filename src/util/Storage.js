import { initSession } from "./InitSession";

const Storage = {
    StoreAsObject: (key, value) => {
        try {
          const jsonValue = JSON.stringify(value);
          initSession.set(key, jsonValue);
        } catch (e) {
          console.log(e);
          console.log('Saving Error');
        }
      },
      GetAsObject: (key) => {
        try {
          const jsonValue = initSession.getString(key);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
          console.log(e);
        }
      },
    RemoveValue: (key) => {
        try {
            initSession.delete(key);
          } catch (e) {
            console.log('key delete error :', e);
          }      
    }
}
export {Storage};

