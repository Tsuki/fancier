import {Component, NgModule} from "@angular/core";

export class Utils {
  static noOrder() {
    return 0
  }
}

export function compileToComponent(template) {
  return Component({template})(class {
  });
}

export function compileToModule(declarations, imports?) {
  return NgModule({declarations, imports})(class {
  });
}
