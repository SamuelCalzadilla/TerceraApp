import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel3-5',
  standalone: false,
  
  templateUrl: './nivel3-5.component.html',
  styleUrls: ['./nivel3-5.component.css', '../../app.component.css']
})
export class Nivel35Component {
  pre1 = `
  server {
    listen       80;
    server_name  tu-dominio.com;

    root   /ruta/a/tu/dist/mi-primera-app;
    index  index.html index.htm;

    location / {
        try_files $uri $uri/ /index.html;
    }
}`;
  pre2 = `location / {
    try_files $uri $uri/ /index.html;
}`;
  pre3 = `<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>`;
pre4 = `
name: Deploy Angular App

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout Repository
      uses: actions/checkout@v2

    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install Dependencies
      run: npm install

    - name: Build
      run: ng build --prod

    - name: Deploy to Firebase
      uses: w9jds/firebase-action@v1.5.0
      with:
        args: deploy --only hosting
      env:
        FIREBASE_TOKEN: \${{ secrets.FIREBASE_TOKEN }}
`;

}
