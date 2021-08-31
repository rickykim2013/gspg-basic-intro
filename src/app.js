import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to GSPG";

  showFeatures = true;

  /**
   * Getter for the features property
   */
  get features() {
    return [
      {
        label: "Training",
        icon: "custom:custom11",
      },
      {
        label: "Consulting",
        icon: "custom:custom11",
      },
      {
        label: "Community",
        icon: "custom:custom11",
      },
    ];
  }
}

