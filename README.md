# JSON Canonicalization Tests

This project tests various JavaScript JSON canonicalization libraries for
conformance with the [OLPC canonical JSON specification][1].

The OLPC specification is different than the [RFC 8785][2] specification
and is mainly relevant because it is the one used by
[The Update Framework][3].

The following packages have been tested:

* [@stratumn/canonicaljson](https://www.npmjs.com/package/@stratumn/canonicaljson)
* [@truestamp/canonify](https://www.npmjs.com/package/@truestamp/canonify)
* [another-json](https://www.npmjs.com/package/another-json)
* [canon](https://www.npmjs.com/package/canon)
* [canonical-json](https://www.npmjs.com/package/canonical-json)
* [canonicalize](https://www.npmjs.com/package/canonicalize)
* [canonicalize-json](https://www.npmjs.com/package/canonicalize-json)
* [json-canonicalize](https://www.npmjs.com/package/json-canonicalize)

None of the above packages are able to canonicalize JSON according to the OLPC
specification.

## Installation

Clone this repo and execute the following:

```
npm install
```

## Tests

Run the test by executing the following command:

```
npm test
```

[1]: http://wiki.laptop.org/go/Canonical_JSON
[2]: https://www.rfc-editor.org/rfc/rfc8785
[3]: https://theupdateframework.github.io/specification/latest/#metaformat
