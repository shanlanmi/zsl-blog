----
title: Lambda
date: 2017-04-18 11:10:02
categories:
- AWS
----
# AWS Lambda
## Profile
### Setting

```
aws configure
```

### Using
1. Using profile as default

  ```
  export AWS_DEFAULT_PROFILE=sqs
  export AWS_DEFAULT_PROFILE=default
  ```
2. Using profile for one time
  ```
  aws some-cmd --profile user2
  ```

### Check
```
aws lambda list-functions --profile user2
```

## Create Lambda Function
### Create with aws-cli
```
aws lambda create-function \
--region us-west-2 \
--function-name NodejsHelloWorld \
--zip-file fileb://./app.zip \
--role arn:aws:iam::479979360973:role/s3_role \
--handler app.handler \
--runtime nodejs6.10 \
```

## Invoke Lambda Function
```
aws lambda invoke \
--function-name CreateTableAddRecordsAndRead  \
--region us-east-1 \
--profile adminuser \
output.txt  
```

## Update Lambda Function Attributes
```
aws lambda update-function-configuration \
--function-name NodejsHelloWorld \
--dead-letter-config TargetArn=arn:aws:sqs:us-west-2:479979360973:s3-uploader-dlq
```

## 几个问题
1. lambda本身有queue的概念么?? 搁置
1. 如何触发lambda函数
1. 如何在lambda下进行下载图片、resize
