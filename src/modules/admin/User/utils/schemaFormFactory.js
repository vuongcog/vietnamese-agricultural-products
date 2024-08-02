import { schemaFormCreate } from '../constants/schemaFormCreate';
import { schemaFormCreateManager } from '../constants/schemaFormCreateManager';
import { schemaFormEdit } from '../constants/schemaFormEdit';
import { schemaFormEditManager } from '../constants/schemaFormEditManager';

export function schemaFormFactory(type) {
  switch (type) {
    case 'edit':
      return schemaFormEdit;
    case 'create':
      return schemaFormCreate;
  }
}

export function schemaFormFactoryManager(type) {
  switch (type) {
    case 'edit':
      return schemaFormEditManager;
    case 'create':
      return schemaFormCreateManager;
  }
}
