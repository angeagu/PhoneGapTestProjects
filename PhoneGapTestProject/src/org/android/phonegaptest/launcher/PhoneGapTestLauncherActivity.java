package org.android.phonegaptest.launcher;

// import android.app.Activity;
import org.android.phonegaptest.camera.PhoneGapTestCameraActivity;
import org.android.phonegaptest.facturas.PhoneGapTestProjectFacturasActivity;
import org.android.phonegaptest.gps.PhoneGapTestGpsActivity;
import org.android.phonegaptest.mediaplayer.PhoneGapTestMediaPlayerActivity;
import org.android.phonegaptest.nbaplayers.PhoneGapTestNbaPlayersActivity;
import org.apache.cordova.DroidGap;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

public class PhoneGapTestLauncherActivity extends DroidGap {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        try {
        	super.onCreate(savedInstanceState);
        	
        	super.init();
        	appView.addJavascriptInterface(this, "PhoneGapTestLauncherActivity");
        	
            Log.d("PhoneGapTestActivity", "Antes de direccionar a index.html");
        	super.loadUrl("file:///android_asset/www/launcher/index.html");
        	Log.d("PhoneGapTestActivity", "Después de direccionar a index.html");
        	
        }
        catch (Exception ex) {
        	Log.d("PhoneGapTestActivity", ex.toString());
        	Log.e("PhoneGapTestActivity", ex.toString());
        }
    }
    
    public void startCamaraActivity() {
    	try {
    		Intent i = new Intent(PhoneGapTestLauncherActivity.this,PhoneGapTestCameraActivity.class);
    		startActivityForResult(i, 1);
    	}
    	catch (Exception ex) {
        	Log.d("PhoneGapTestActivity.startCamaraActivity", ex.toString());
        	Log.e("PhoneGapTestActivity.startCamaraActivity", ex.toString());
        }
    }
    
    public void startFacturasActivity() {
    	try {
    		Intent i = new Intent(PhoneGapTestLauncherActivity.this,PhoneGapTestProjectFacturasActivity.class);
    		startActivityForResult(i, 1);
    	}
    	catch (Exception ex) {
        	Log.d("PhoneGapTestActivity.startFacturasActivity", ex.toString());
        	Log.e("PhoneGapTestActivity.startFacturasActivity", ex.toString());
        }
    }
    
    public void startNbaPlayersActivity() {
    	try {
    		Intent i = new Intent(PhoneGapTestLauncherActivity.this,PhoneGapTestNbaPlayersActivity.class);
    		startActivityForResult(i, 1);
    	}
    	catch (Exception ex) {
        	Log.d("PhoneGapTestActivity.startNbaPlayersActivity", ex.toString());
        	Log.e("PhoneGapTestActivity.startNbaPlayersActivity", ex.toString());
        }
    }
    
    public void startMediaPlayerActivity() {
    	try {
    		Intent i = new Intent(PhoneGapTestLauncherActivity.this,PhoneGapTestMediaPlayerActivity.class);
    		startActivityForResult(i, 1);
    	}
    	catch (Exception ex) {
        	Log.d("PhoneGapTestActivity.startMediaPlayerActivity", ex.toString());
        	Log.e("PhoneGapTestActivity.startMediaPlayerActivity", ex.toString());
        }
    }
    
    public void startGpsActivity() {
    	try {
    		Intent i = new Intent(PhoneGapTestLauncherActivity.this,PhoneGapTestGpsActivity.class);
    		startActivityForResult(i, 1);
    	}
    	catch (Exception ex) {
        	Log.d("PhoneGapTestActivity.startGpsActivity", ex.toString());
        	Log.e("PhoneGapTestActivity.startGpsActivity", ex.toString());
        }
    }
    
}