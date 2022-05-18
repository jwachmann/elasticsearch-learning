// Search queries are directed to the _search api
// GET people/_search



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