import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  authentication: service(),

  setupController(controller) {
    this._super(...arguments);
    controller.set("records", this.get("authentication.records"));
  },

  actions: {
    addToRecords(value) {
      this.get("authentication.records").addObject({ id: value });
    },
  },
});
