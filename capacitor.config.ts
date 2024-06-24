import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.maxmat',
  appName: 'max-matthiessen',
  webDir: 'dist/max-matthiessen',

  "server": {
    "cleartext": true,
    "hostname": "172.20.32.179",
    "androidScheme": "http",
    "url":"http://172.20.32.179:3000"
  }

};

export default config;
