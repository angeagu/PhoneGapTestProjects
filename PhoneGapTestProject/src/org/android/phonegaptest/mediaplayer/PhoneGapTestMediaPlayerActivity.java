package org.android.phonegaptest.mediaplayer;

import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.util.Log;

public class PhoneGapTestMediaPlayerActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
    	try {
        	super.onCreate(savedInstanceState);
        	//setContentView(R.layout.main);
        	Log.d("JQueryTestActivity", "Antes de direccionar a index.html");
        	super.loadUrl("file:///android_asset/www/mediaplayer/index.html");
        	Log.d("JQueryTestActivity", "Después de direccionar a index.html");
        }
        catch (Exception ex) {
        	Log.d("JQueryTestActivity", ex.toString());
        	Log.e("JQueryTestActivity", ex.toString());
        }
    }
}