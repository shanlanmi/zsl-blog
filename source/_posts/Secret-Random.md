----
title: Secret Random
date: 2016-12-15 17:31:59
categories:
- NodeJS
----
安装 libsodium
- Github
https://github.com/jedisct1/libsodium
- Download
https://download.libsodium.org/libsodium/releases/
- Install
https://download.libsodium.org/doc/installation/
## 其他语言
### General Requirements for Inclusion
Every solution on this page must exclusively read from the kernel's CSPRNG and fail closed. Userspace RNGs and insecure RNG fallbacks will not be accepted. This means the following sources of entropy are used, depending on platform:

* Windows:
  * `RtlGenRandom`
* Linux:
  * `getrandom` (if available)
    * This does the correct thing: It blocks until seeded, and then never again.
  * `/dev/urandom` (older Linux kernels)
    * For software that runs during the Linux boot, poll `/dev/random` until it's available. This means `/dev/urandom` has been seeded and you can safely read from `/dev/urandom` for all your cryptographic purposes. Don't read from `/dev/random`.
* OpenBSD:
  * `getentropy()`
  * `arc4random_buf()` with ChaCha20 (not RC4)
* Other Unix-like (including OS X):
  * `/dev/urandom`
Solutions that rely on haveged, egd, etc. are not acceptable for consideration.

### Cryptographically Secure Randomness in C/C++

The easiest and safest solution here is to add libsodium as a dependency to your project and just use randombytes_buf().

If this isn't considered an acceptable solution, take a close look at how libsodium implements these functions. The PHP team adopted a similar approach in the internal random_bytes implementation.

```
#include "sodium.h"
int foo() {
    char myString[32];
    uint32_t myInt;
    
    randombytes_buf(myString, 32);
    /* myString will be an array of 32 random bytes, not null-terminated */
    myInt = randombytes_uniform(10);
    /* myInt will be a random number between 0 and 9 */
}
```
"Just use libsodium if you can," also applies for every other language below.

### Cryptographically Secure Randomness in Erlang

Don't use the crypto module for this, as it just wraps OpenSSL (which in turn exposes a userland PRNG via RAND_bytes() rather than the operating system's CSPRNG).

Instead, use Erlang's libsodium bindings. Added bonus: Now you have libsodium available to satisfy all of your project's cryptography needs.

RandomBytes = libsodium_randombytes:buf(32).
RandomInt = libsodium_randombytes:uniform(1000).

### Cryptographically Secure Randomness in Go

Go provides a package called crypto/rand that you should use. It does everything right (but make you're using crypto/rand and not math/rand).

Refer to the example code provided in the Go documentation for crypto/rand (which you can run from the browser).

### Cryptographically Secure Randomness in Java

Aside from just using libsodium (recommended), Java's SecureRandom class is straightforward:

```
SecureRandom csprng = new SecureRandom();
byte[] randomBytes = new byte[32];
csprng.nextBytes(randombytes);
```
Important: Despite its name, don't use SecureRandom.getInstanceStrong()! On Linux, this is the equivalent to reading /dev/random which is a pointless performance killer. The default for new SecureRandom() in Java 8 is to read from /dev/urandom, which is what you want.

### Cryptographically Secure Randomness in JavaScript (Client-Side, In-Browser)

First, make sure you're not making a terrible mistake.

Then, use window.crypto.randomBytes() if it's available, and fail hard if it's not. There really aren't any other options.

See the section on CSPRNGs in Node.js for server-side JavaScript, which has its own nuances.

### Cryptographically Secure Randomness in .NET (C#)

The generally accepted solution is to use System.Security.Cryptography.RNGCryptoServiceProvider, like so:

```
RandomNumberGenerator csprng = new RNGCryptoServiceProvider();
byte[] rawByteArray = new byte[32];
csprng.getBytes(rawByteArray);
```
If you need to generate cryptoraphically secure integers, check out how this was implemented in the CryptoRandom class in the Inferno (a .NET cryptography library by Stan Drapkin).

### Cryptographically Secure Randomness in Node.js

**Don't use `crypto.randomBytes()`.**
Your best bet until they move away from OpenSSL is node-sodium:

```
var csprng = require("sodium").Random;
var bytes = csprng.randombytes_buf(32);
```
If you want to throw caution to the wind and use OpenSSL's PRNG today, read this guide to randomness by Sven Slootweg.

### Cryptographically Secure Randomness in PHP

If you're running PHP 7, there are built-in functions for this:

```
$string = random_bytes(32);
$integer = random_int(0, PHP_INT_MAX);
```
If you're still on PHP 5, grab random_compat and then enjoy the same API as PHP 7.

composer require paragonie/random_compat:^2
Please use version 2. Version 1 would fall back to OpenSSL if there were no other sources of entropy available, which is an unnecessary source of security concerns. However, some people will explicitly lock themselves into version 1 for compatibility reasons.

If you are building a PHP 5 library that other people will use in their projects, set the requirement string in your composer.json to ^1|^2. Conversely, if you are building an application, set the requirement string to ^2.

### Cryptographically Secure Randomness in Python

If you aren't using libsodium:

If you need random bytes, use os.urandom().
If you need other forms of randomness, you want an instance of random.SystemRandom() instead of just random.
```
import os
import sys
import random
```

# Random bytes
bytes = os.urandom(32)
csprng = random.SystemRandom()

# Random (probably large) integer
random_int = csprng.randint(0, sys.maxint)

### Cryptographically Secure Randomness in Ruby

Do NOT use Ruby's SecureRandom!
Despite its name, it does not conform to best CSPRNG practices. Luckily, Tony Arcieri (cypherpunk, maker of The Cryptosphere, and all-around practical cryptography engineer) provided the Ruby community with a safe alternative by porting libsodium's sysrandom interface to a Ruby gem.

Recommendation: Use Sysrandom instead of SecureRandom.

To install sysrandom:

gem install sysrandom
Sysrandom is API-compatible with SecureRandom and can even be patched in place of SecureRandom.

Crypttographically Secure Randomness in Rust

The rand crate provides several RNG APIs, but the one you want to use is OsRng. The source code that powers OsRng is available here.

Sample code provided by Jamie Turner:

```
//! Safe cryptographic random number generation in Rust.
//! Works on Windows, Mac, Linux, FreeBSD, etc.
extern crate rand; // https://crates.io/crates/rand

use rand::{Rng};         // The generic trait all random generators support.
use rand::os::{OsRng};   // Specific implementation of above for strong crypto.

fn main() {
    // OsRng is a type of `Rng` that wraps /dev/urandom, getrandom(), etc.
    let mut r = OsRng::new().unwrap();

    // Random bytes.
    let mut my_secure_bytes = vec![0u8; 1500];
    r.fill_bytes(&mut my_secure_bytes);

    // Primitive types and short arrays.
    let my_secure_int: u64 = r.gen();
    
    println!("First few bytes = {:?}; random int = {:?}",
        &my_secure_bytes[..5], my_secure_int);
}
```
Both libsodium and ring are cryptography libraries available to Rust developers that offer (among other things) sane random number generators.
