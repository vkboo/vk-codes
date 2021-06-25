import { useState } from 'react';
import creatStore from '../create';
function useUserInfo () {
    const [userInfo, setUseUserInfo] = useState({
        name: 'i-name',
        age: 10,
    });

    const onAddAge = () => {
        setUseUserInfo(prev => ({
            ...prev,
            age: prev.age + 1,
        }))
    }

    const onReduceAge = () => {
        setUseUserInfo(prev => ({
            ...prev,
            age: prev.age - 1,
        }))
    }
    return { name: userInfo.name, age: userInfo.age, onAddAge, onReduceAge };
}

const useInfoStore = creatStore(useUserInfo);
export default useInfoStore;