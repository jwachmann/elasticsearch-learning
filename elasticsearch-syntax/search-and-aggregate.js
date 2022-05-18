// Search queries are directed to the _search api
// GET people/_search

// Get docs that match the given field, return the top 5 results
// GET people/_search
q=
{
  "query": {
    "match": {
      "job": "Engineer"
    }
  },
  "size": 5
}

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

// Sort documents by a field
//GET people/_search
q=
{
  "sort": [
    {
      "name": {
        "order": "desc"
      }
    }
  ]
}
