import { gql } from 'apollo-server';
import { readFileSync } from 'fs';
import { dirname, join } from 'path';

export function loadSchema(path: string) {
  return gql(readFileSync(join(importerPath(), path), 'utf8'));
}

function importerPath() {
  return dirname(module.parent.filename);
}
