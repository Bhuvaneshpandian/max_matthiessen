import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeBiometric, BiometryType } from '@capgo/capacitor-native-biometric';
import { AuthService } from 'src/services/auth.service';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  canShowWelcomePage: boolean = true;

  constructor(private router: Router, private authService: AuthService) {
    setTimeout(() => {
      this.canShowWelcomePage = false;
    }, 200)
  }

  onLoginClick(): void {
    this.router.navigate(["/dashboard"])
  }

  async onOpenClick() {
    if (Capacitor.isNativePlatform()) {
      await this.setUpBioMatric();
      return;
    }
    this.authService.login("bhuvanesh", '1234');
    this.router.navigate(["/dashboard"])
  }

  async setCredentials() {
    try {
      NativeBiometric.setCredentials({
        username: "bhuvanesh",
        password: "1234",
        server: "http://localhost:4200/login",
      })
    }
    catch (e) {
      alert(JSON.stringify(e))
    }
  }

  async setUpBioMatric() {
    this.setCredentials()
    try {
      const result = await NativeBiometric.isAvailable({ useFallback: true });
      if (!result.isAvailable) return;
      const verified = await NativeBiometric.verifyIdentity({
        reason: "For easy log in",
        title: "Log to Max Matthiessen",
        useFallback: true
      })
        .then(() => true)
        .catch(() => false);
      if (!verified) return;
      const credentials = await NativeBiometric.getCredentials({
        server: "http://localhost:4200/login",
      });
      this.authService.login(credentials.username, credentials.password);
      this.router.navigate(["/dashboard"])
    }
    catch (e) {
      console.error(e);
    }
  }


}
