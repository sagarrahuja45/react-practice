/**
 * @generated SignedSource<<5fb0f2cafe8c8c90cf050275814f5ab0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Link",
    "kind": "LinkedField",
    "name": "deleteLink",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BookComponentMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BookComponentMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5a263314772af07b69e98dd9429993c5",
    "id": null,
    "metadata": {},
    "name": "BookComponentMutation",
    "operationKind": "mutation",
    "text": "mutation BookComponentMutation(\n  $id: ID!\n) {\n  deleteLink(id: $id) {\n    id\n  }\n}\n"
  }
};
})();

node.hash = "88e859d0665503820caf81e47cd68a09";

module.exports = node;
