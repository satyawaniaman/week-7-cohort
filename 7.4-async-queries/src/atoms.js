import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
    key: "networkAtom",
    default:selector({
        key: "networkAtomSelector",
        get: async () => {
            const res = await axios.get('https://dummyjson.com/c/f6c4-856e-48b4-999d');
            console.log(res.data)
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotifications = get(notifications);
        return allNotifications.networks + 
        allNotifications.jobs + 
        allNotifications.notifications + 
        allNotifications.messages
    }
})