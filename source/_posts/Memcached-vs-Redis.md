----
title: Memcached vs Redis
date: 2017-02-19 15:26:07
categories:
- Database
----
## Memcached
- Memcached is older and more stable, it has far **lesser** **bugs.**
- Memcached's system is more **effective** because it uses less memory for metadata.
- There is **only** **one** data type used by Memcached which is **String.**
- Memcached is easy to **scale.**

## Redis
- 
you can set key names and values to be 512MB each, compared to Memcached's 250 bytes for key names and limits value to 1MB with only plain strings.
- For cache eviction, is has 6 different methods that it uses to properly evict what you want.
- The data from the previous session is saved and stored.
