import toast from "react-hot-toast";
import { useState, useEffect } from "react";
import { getChannelsSettings, updateChannelSettings } from "../../services";

export const useChangeSettings= () => {
    
    const [channelSettings, setChannelSettings] = useState()

    const fetchChannelSettigns = async () => {
        const response = await getChannelsSettings();

        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error al obtener los datos del canal'
            )
        }
        
        setChannelSettings({
            username: response.data.username,
            title: response.data.title,
            description: response.data.description,
            avatarURL: response.data.avatarURL,
            streamKey: response.data.streamKey,
        })
    }

    const saveSettings = async (data) => {
        const response = await updateChannelSettings(data)

        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrio un error al actualizar la informacion del canal'
            )
        }

        toast.success('Informacion actualizada correctamente')
    }

    useEffect(()=>{
        fetchChannelSettigns()
    }, [])

    return ({
        isFetching: !channelSettings,
        channelSettings,
        saveSettings
    })
}