----
title: Elasticsearch
date: 2016-12-13 04:40:53
categories:
- DevDependent
----
## Elasticsearch
https://github.com/elastic/elasticsearch

### Install
```
curl -L -O https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-1.3.7.tar.gz && tar -xvf elasticsearch-1.3.7.tar.gz
```
<https://www.elastic.co/downloads/past-releases/elasticsearch-1-3-7>

### Usage
Run `bin/elasticsearch`

## elasticsearch-kopf
https://github.com/lmenezes/elasticsearch-kopf/tree/1.0

### Install
```
# Install locally
git clone git://github.com/lmenezes/elasticsearch-kopf.git
cd elasticsearch-kopf
git checkout {version}

# Install on a instance
./elasticsearch/bin/plugin --install lmenezes/elasticsearch-kopf/{version}
```

### Usage
```
# locally
http://10.0.1.200:9200/_plugin/kopf/#!/rest

# online
http://lmenezes.com/elasticsearch-kopf/?location=http://localhost:9200
```

## Wordnet
https://wordnet.princeton.edu/wordnet/download/

need tk, tcl?

## elasticsearch-js
https://github.com/elastic/elasticsearch-js

