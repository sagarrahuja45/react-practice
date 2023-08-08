/**
 * @generated SignedSource<<225ff2e55d7eeb78597714426f8ca2d8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "info",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Link",
    "kind": "LinkedField",
    "name": "feed",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BookComponentQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BookComponentQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "cdbcd67772d763a9f11d549913d4dbd4",
    "id": null,
    "metadata": {},
    "name": "BookComponentQuery",
    "operationKind": "query",
    "text": "query BookComponentQuery {\n  info\n  feed {\n    id\n    description\n  }\n}\n"
  }
};
})();

node.hash = "d3f087ee41aa30ccb918fedb02a76756";

module.exports = node;
