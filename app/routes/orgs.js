import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  favorites: service(),

  model() {
    return [
      { id: "emberjs" },
      { id: "ember-cli" },
      { id: "microsoft" },
      { id: "yahoo" },
      { id: "netflix" },
      { id: "facebook" },
    ];
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set("items", this.get("favorites.items"));
  },

  actions: {
    addToItems(value) {
      this.get("favorites.items").addObject({ id: value });
      console.log(this.get("favorites.items"));
    },
  },
});
