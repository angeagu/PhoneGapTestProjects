package org.android.phonegaptest.gps;

import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.util.Log;

public class PhoneGapTestGpsActivity extends DroidGap {

	/** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        try {
        	super.onCreate(savedInstanceState);
        	Log.d("PhoneGapTestGpsActivity", "Antes de direccionar a index.html");
        	super.loadUrl("file:///android_asset/www/gps/index.html");
        	Log.d("PhoneGapTestGpsActivity", "Después de direccionar a index.html");
        }
        catch (Exception ex) {
        	Log.d("PhoneGapTestGpsActivity", ex.toString());
        	Log.e("PhoneGapTestGpsActivity", ex.toString());
        }
    }
}
