package com.maxmat.app;

import ee.forgr.biometric.NativeBiometric;
import com.getcapacitor.BridgeActivity;
import android.os.Bundle;


public class MainActivity extends BridgeActivity {
    @Override
      public void onCreate(Bundle savedInstanceState) {
            registerPlugin(NativeBiometric.class);

            super.onCreate(savedInstanceState);

      }

}
