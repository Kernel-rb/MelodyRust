import { useEffect, useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';
import './AppVersion.css';

function AppVersion() {
    const [version, setVersion] = useState<string | null>(null);
    const [latestVersion, setLatestVersion] = useState<string | null>(null);

    useEffect(() => {
        invoke('get_app_version')
            .then((response) => setVersion(response as string))
            .catch((error) => console.error('Error fetching app version:', error));
    }, []);

    useEffect(() => {
        invoke('fetch_latest_version')
            .then((latest) => setLatestVersion(latest as string))
            .catch((error) => console.error('Error checking for updates:', error));
    }, []);

    useEffect(() => {
        if (version && latestVersion) {
            if (version !== latestVersion) {
                if (!isPermissionGranted()) {
                    requestPermission();
                }
                sendNotification({
                    title: 'Melody Rust : Update Available 🚨',
                    body: 'A new version of the app is available. Please update to the latest version.',
                });
            } else {
                sendNotification({
                    title: 'Melody Rust : Up to date 🤝',
                    body: 'You are using the latest version of the app.',
                });
            }
        }
    }, [version, latestVersion]);

    return (
        <div className='version'>
            You are currently using: <span>{version ? `${version} V` : 'Loading...'}</span>
        </div>
    );
}

export default AppVersion;
