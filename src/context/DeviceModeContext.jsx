import { createContext, useContext, useState } from "react";

const DeviceModeContext = createContext();

export function DeviceModeProvider({children}) {
    const [DeviceModeset, setDeviceModeset] = useState({
        mobile: true,
        tablet: false,
        desktop: false
    });

    const handleDeviceMode = (e) => {
        const deviceMode = e.currentTarget.dataset.device
        setDeviceModeset({
            mobile: false,
            tablet: false,
            desktop: false,
            [deviceMode]: true
        })
    }

    return (
        <DeviceModeContext.Provider value={{DeviceModeset, handleDeviceMode}}>
            {children}
        </DeviceModeContext.Provider>
    )
}

export const useDeviceMode = () => useContext(DeviceModeContext);