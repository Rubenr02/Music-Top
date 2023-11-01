package com.example.musictop

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val webView1: WebView = findViewById(R.id.webView1)
// set the properties for the webview
        val webSettings1: WebSettings = webView1.settings
        webSettings1.javaScriptEnabled = true
        webSettings1.allowUniversalAccessFromFileURLs = true
        webView1.webChromeClient = WebChromeClient()
        webView1.webViewClient = WebViewClient()
// load the index.html webpage
        webView1.loadUrl("file:///android_asset/www/top.html");
    }
}