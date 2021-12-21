import { Component, OnInit } from "@angular/core";
import { ContactUserModel } from "src/app/models/ContactUserModel";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  // model: any = {};
  contactUserForm: FormGroup;
  contactUserModel: ContactUserModel = {
    name: null,
    subject: null,
    email: null,
    message: null,
  };

  constructor(private formBuilder: FormBuilder) {
    this.contactUserForm = this.formBuilder.group({
      name: [this.contactUserModel.name, [Validators.required]],
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
      ),
      subject: [this.contactUserModel.subject, [Validators.required]],
      message: [this.contactUserModel.message, [Validators.required]],
    });
  }

  ngOnInit() {}

  submitForm() {
    console.log(this.contactUserForm.value);
  }
}
