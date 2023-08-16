/**
 * @generated SignedSource<<ec84190d5f0cf7a247d2a04bf28ae9d4>>
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "BookComponentaddLinkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Link",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "BookComponenturlFragment"
          }
        ],
        "storageKey": null
      }
    ],
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
    "name": "BookComponentaddLinkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "Link",
        "kind": "LinkedField",
        "name": "post",
        "plural": false,
        "selections": [
          (v3/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "28538c77e85cc82299613aecb461a38c",
    "id": null,
    "metadata": {},
    "name": "BookComponentaddLinkMutation",
    "operationKind": "mutation",
    "text": "mutation BookComponentaddLinkMutation(\n  $url: String!\n  $description: String!\n) {\n  post(url: $url, description: $description) {\n    id\n    ...BookComponenturlFragment\n  }\n}\n\nfragment BookComponenturlFragment on Link {\n  url\n  description\n}\n"
  }
};
})();

node.hash = "e94e3b7bf48161a103bcd5cee55d83b8";

module.exports = node;
