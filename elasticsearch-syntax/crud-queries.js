// Create an index
// PUT people

// Create a document with auto-assigned id
// POST people/_doc
q=
{
    "name": "James",
    "job": "Engineer"
}

// Create a document with a manually assigned id
// PUT people/_doc/2
q=
{
    "name": "Joe",
    "job": "Athlete"
}

// Create a document only if it doesn't already exist with the _create api
// PUT people/_create/2
q=
{
    "name": "This will fail",
    "job": "Blank"
}

// Get a document by id
// GET people/_doc/1

// Update specific fields in a document, don't change other fields which aren't mentioned
// POST people/_update/2
q=
{
  "doc": {
    "job": "Retired athlete"  // one or more fields listed here
  }
}

// Delete a document by id
// DELETE people/_doc/1

// Get list of values for a field and how many docs contain it (categories)
// GET people/_search
q=
{
  "aggs": {
    "by_type": {
      "terms": {
        "field": "job",
        "size": 100
      }
    }
  }
}