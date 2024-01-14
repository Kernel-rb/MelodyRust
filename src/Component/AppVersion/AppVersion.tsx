import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';
import './AppVersion.css';

function AppVersion() {
    const [version, setVersion] = useState('');

    useEffect(() => {
        invoke('get_app_version')
            .then((response) => setVersion(response as string))
            .catch((error) => console.error('Error fetching app version:', error));
    }, []);
    useEffect(() => {
        invoke('fetch_latest_version')
            .then((latest) => {
                if (version !== latest) {
                    if (!isPermissionGranted()) {
                        requestPermission();
                    }
                    sendNotification({
                        title: ' Melody Rust : Update Available ',
                        body: 'A new version of the app is available. Please update to the latest version.',
                    });
                }
            })
            .catch((error) => console.error('Error checking for updates:', error));
    }, [version]);   

    return <div className='version'> You are currently using : <span>{version} V</span></div>
}

export default AppVersion;
