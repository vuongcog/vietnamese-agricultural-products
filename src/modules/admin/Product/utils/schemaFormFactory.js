import { schemaFormCreate } from "../constants/schemaFormCreate";
import { schemaFormEdit } from "../constants/schemaFormEdit";

export function schemaFormFactory(type) {
  switch (type) {
    case "edit":
      return schemaFormEdit;
    case "create":
      return schemaFormCreate;
  }
}
