import { useEffect, useState } from 'react';

function TabStyleChanger({ activeTitle = "My App", inactiveTitle = "Check Out My App", }) {
    const [isActive, setIsActive] = useState('true')
    useEffect(() => {
        const handleWindowFocus = () => {
            document.title = activeTitle;
            document.body.style.backgroundColor = 'red';
            console.log("onFocus");
            console.log(a);
            // alert("ho")
            setIsActive(true);
        };

        const handleWindowBlur = () => {
            document.title = inactiveTitle;
            setIsActive(false)
            console.log("OnBlur");
        };

        window.addEventListener('focus', handleWindowFocus);
        window.addEventListener('blur', handleWindowBlur);
        // handleWindowFocus();
        const a = isActive ? "" : ""
        return () => {
            window.removeEventListener('focus', handleWindowFocus);
            window.removeEventListener('blur', handleWindowBlur);
        };
    }, [activeTitle, inactiveTitle, isActive]);


    return null;
};

export default TabStyleChanger;
