package org.android.phonegaptest.nbaplayers;

import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.util.Log;

public class PhoneGapTestNbaPlayersActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
    	try {
        	super.onCreate(savedInstanceState);
        	//setContentView(R.layout.main);
        	Log.d("PhoneGapTestNbaPlayersActivity", "Antes de direccionar a index.html");
        	super.loadUrl("file:///android_asset/www/nbaplayers/index.html");
        	Log.d("PhoneGapTestNbaPlayersActivity", "Después de direccionar a index.html");
        }
        catch (Exception ex) {
        	Log.d("PhoneGapTestNbaPlayersActivity", ex.toString());
        	Log.e("PhoneGapTestNbaPlayersActivity", ex.toString());
        }
    }
}