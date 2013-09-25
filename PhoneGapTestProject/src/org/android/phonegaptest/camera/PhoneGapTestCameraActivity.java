package org.android.phonegaptest.camera;

import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.util.Log;

public class PhoneGapTestCameraActivity extends DroidGap {

	/** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        try {
        	super.onCreate(savedInstanceState);
        	Log.d("PhoneGapTestCameraActivity", "Antes de direccionar a index.html");
        	super.loadUrl("file:///android_asset/www/camera/index.html");
        	Log.d("PhoneGapTestCameraActivity", "Después de direccionar a index.html");
        }
        catch (Exception ex) {
        	Log.d("PhoneGapTestCameraActivity", ex.toString());
        	Log.e("PhoneGapTestCameraActivity", ex.toString());
        }
    }
    
}
