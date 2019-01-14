# Serverless Template

## Prerequisites

Make sure you have the following installed on your system:

- [`Node.js`](http://nodejs.org/) ^10.x
- [`yarn`](https://yarnpkg.com/) ^1.x

```sh
# using homebrew
$ brew install node yarn
```

## Getting started

- initialize new servless project

```sh
$ curl -fsSL https://raw.github.com/joblocal/serverless-template/master/install.sh | sh

# optionaly provide a name
$ curl -fsSL https://raw.github.com/joblocal/serverless-template/master/install.sh | sh -s my-awesome-serverless-project
```

- install depencenies: `yarn install`

To test the `hello` function, execute the following command:

```sh
$ serverless invoke local --function hello
```

Edit the `serverless.yml` accordingly. Happy hacking ;)

Made with :heart: by Joblocal
