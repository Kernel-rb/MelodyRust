#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{CustomMenuItem, Manager, SystemTray, SystemTrayEvent, SystemTrayMenu};
use reqwest;
use regex::Regex;



#[tauri::command]
fn get_app_version() -> String {
    env!("CARGO_PKG_VERSION").to_string()
}

#[tauri::command]
async fn fetch_latest_version() -> Result<String, String> {
    let url = "https://raw.githubusercontent.com/Kernel-rb/MelodyRust/main/src-tauri/Cargo.toml";
    let response = reqwest::get(url).await.map_err(|e| e.to_string())?.text().await.map_err(|e| e.to_string())?;
    let version_regex = Regex::new(r#"(?m)^version\s*=\s*"([0-9.]+)""#).unwrap();
    if let Some(caps) = version_regex.captures(&response) {
        Ok(caps[1].to_string())
    } else {
        Err("Version not found in Cargo.toml".into())
    }
}



#[tokio::main]
async fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![fetch_latest_version , get_app_version ])
        .system_tray(SystemTray::new().with_menu(
            SystemTrayMenu::new()
                .add_item(CustomMenuItem::new("show", "Show"))
                .add_item(CustomMenuItem::new("hide", "Hide"))
                .add_item(CustomMenuItem::new("quit", "Quit")),
        ))
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::MenuItemClick { id, .. } => {
                match id.as_str() {
                    "show" => {
                        if let Some(window) = app.get_window("main") {
                            let _ = window.show().and_then(|_| window.set_focus());
                        }
                    }
                    "hide" => {
                        if let Some(window) = app.get_window("main") {
                            let _ = window.hide();
                        }
                    }
                    "quit" => {
                        std::process::exit(0);
                    }
                    _ => {}
                }
            }
            _ => {}
        })
        .setup(|app| {
            if let Some(window) = app.get_window("main") {
                app.listen_global("tauri://close-requested", move |_| {
                    let _ = window.hide();
                });
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}