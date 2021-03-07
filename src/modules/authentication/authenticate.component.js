import { BaseComponent } from "../../core/components/base.component";
import { ButtonComponent } from "../shared/button/button.component";
import { AuthenticationService} from '../../core/services/authentication.service';

import htmlContent from "./authentication.component.html";

export class AuthenticationComponent extends BaseComponent {
  constructor({container, }) {
    super({container, htmlContent, });
    this.authenticationService = new AuthenticationService();
    this.init();
  }

  init() {
    const submitButton = this.container.querySelector(".login");

    new ButtonComponent({
      container: submitButton,
      props: {
        label: "Login",
        onClick: (e) => this.login(),
      },
    });

    
  }

  login() {
    this.authenticationService.login();
  }
}
