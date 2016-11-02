
<!--#echo json="package.json" key="name" underline="=" -->
toml2json
=========
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
CLI program that reads TOML and prints it as JSON.
<!--/#echo -->


Usage
-----
```bash
$ toml2json test/simple.toml
{ "simple": "Just some text.",
  "andSomeNumbers": [
    12,
    34,
    56
  ]
}
$ <test/simple.toml toml2json
{ "simple": "Just some text.",
  "andSomeNumbers": [
    12,
    34,
    56
  ]
}
```


<!--#toc stop="scan" -->


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
