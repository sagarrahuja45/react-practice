/**
 * @generated SignedSource<<40a15c98519716a233b4a395c065e90f>>
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
        "name": "url",
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
    "cacheID": "cb1b3238d8a38ecd2d4b181904bc3741",
    "id": null,
    "metadata": {},
    "name": "BookComponentQuery",
    "operationKind": "query",
    "text": "query BookComponentQuery {\n  info\n  feed {\n    id\n    url\n    description\n  }\n}\n"
  }
};
})();

node.hash = "2942fe1066871a78913e91100fc70a99";

module.exports = node;
