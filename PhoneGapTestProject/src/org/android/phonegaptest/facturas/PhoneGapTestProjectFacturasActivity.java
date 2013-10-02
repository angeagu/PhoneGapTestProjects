package org.android.phonegaptest.facturas;

// import android.app.Activity;s
import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.util.Log;

public class PhoneGapTestProjectFacturasActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        try {
        	super.onCreate(savedInstanceState);
        	//setContentView(R.layout.main);
        	Log.d("PhoneGapTestActivity", "Antes de direccionar a index.html");
        	super.loadUrl("file:///android_asset/www/facturas/index.html");
        	Log.d("PhoneGapTestActivity", "Después de direccionar a index.html");
        }
        catch (Exception ex) {
        	Log.d("PhoneGapTestActivity", ex.toString());
        	Log.e("PhoneGapTestActivity", ex.toString());
        }
    }
}





