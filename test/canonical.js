const t = require("tap");

const obj = {
  truthy: true,
  falsy: false,
  nullish: null,
  number: 42,
  string: "foo",
  escape: '"foo"\\bar\nbaz',
  array: [1, 2, 3],
  object: { baz: "qux", foo: "bar" },
};

const expected =
  '{"array":[1,2,3],"escape":"\\"foo\\"\\\\bar\nbaz","falsy":false,"nullish":null,"number":42,"object":{"baz":"qux","foo":"bar"},"string":"foo","truthy":true}';

t.test("@stratumn/canonicaljson", (t) => {
  const { stringify: canonicalize } = require("@stratumn/canonicaljson");
  const result = canonicalize(obj);
  t.equal(result, expected);
  t.end();
});

t.test("@truestamp/canonify", (t) => {
  const { canonify: canonicalize } = require("@truestamp/canonify");
  const result = canonicalize(obj);
  t.equal(result, expected);
  t.end();
});

t.test("another-json", (t) => {
  const { stringify: canonicalize } = require("another-json");
  const result = canonicalize(obj);
  t.equal(result, expected);
  t.end();
});

t.test("canon", (t) => {
  const { stringify: canonicalize } = require("canon");
  const result = canonicalize(obj);
  t.equal(result, expected);
  t.end();
});

t.test("canonical-json", (t) => {
  const canonicalize = require("canonical-json");
  const result = canonicalize(obj);
  t.equal(result, expected);
  t.end();
});

t.test("canonicalize", (t) => {
  const canonicalize = require("canonicalize");
  const result = canonicalize(obj);
  t.equal(result, expected);
  t.end();
});

t.test("canonicalize-json", (t) => {
  const { stringify: canonicalize } = require("canonicalize-json");
  const result = canonicalize(obj);
  t.equal(result, expected);
  t.end();
});

t.test("json-canonicalize", (t) => {
  const { canonicalize } = require("json-canonicalize");
  const result = canonicalize(obj);
  t.equal(result, expected);
  t.end();
});
