import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import './AppVersion.css';
function AppVersion() {
    const [version, setVersion] = useState('');

    useEffect(() => {
        invoke('get_app_version')
            .then((response) => setVersion(response as string))
            .catch((error) => console.error('Error fetching app version:', error));
    }, []);

    return <div className='version'> You are currently using : <span>{version} V</span></div>
}

export default AppVersion;
