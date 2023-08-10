/**
 * @generated SignedSource<<1b9626c9f03df494d3d9b32fde468019>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "url"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "url",
        "variableName": "url"
      }
    ],
    "concreteType": "Link",
    "kind": "LinkedField",
    "name": "post",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "addLinkMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "addLinkMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "46cf0e5dee97ff95a164e6638de0b88d",
    "id": null,
    "metadata": {},
    "name": "addLinkMutation",
    "operationKind": "mutation",
    "text": "mutation addLinkMutation(\n  $url: String!\n  $description: String!\n) {\n  post(url: $url, description: $description) {\n    id\n  }\n}\n"
  }
};
})();

node.hash = "6a85965363e6e9ca9d3c33919301b79b";

module.exports = node;
